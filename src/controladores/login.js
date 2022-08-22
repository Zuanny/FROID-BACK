const knex = require('../database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const schemaLogin = require('../validacoes/schemaLogin.js')

const login = async (req, res) => {
  let { name, password: atual } = req.body

  await schemaLogin.validate(req.body)

  try {
    const usuarioCadastrado = await knex('user')
      .where({ name })
      .select('*').first()

    if (!usuarioCadastrado) {
      return res.status(404).json({
        mensagem: 'Usuario ou Senha incorretos'
      })
    }

    let senhaEhCorreta = await bcrypt.compare(atual, usuarioCadastrado.password)

    if (!senhaEhCorreta) {
      return res.status(404).json({
        mensagem: 'Usuario ou Senha incorretos'
      })
    }

    let { password, ...usuario } = usuarioCadastrado

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