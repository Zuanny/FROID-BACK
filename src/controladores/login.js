const knex = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const schemaLogin = require('../validacoes/schemaLogin.js')

const login = async (req, res) => {
  let { email, senha: atual } = req.body

  await schemaLogin.validate(req.body)

  try {
    const usuarioCadastrado = await knex('usuarios')
      .where({ email })
      .select('*').first()

    if (!usuarioCadastrado) {
      return res.status(404).json({
        mensagem: 'Email ou Senha incorretos'
      })
    }

    let senhaEhCorreta = await bcrypt.compare(atual, usuarioCadastrado.senha)

    if (!senhaEhCorreta) {
      return res.status(404).json({
        mensagem: 'Email ou Senha incorretos'
      })
    }

    let { senha, ...usuario } = usuarioCadastrado

    const token = jwt.sign({ usuario }, process.env.JWT_PASSWORD, {
      expiresIn: '24h'
    })
    
    res.set("x-access-token", token)
    
    return res.status(200).json({ usuario, token})
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }
}

module.exports = login