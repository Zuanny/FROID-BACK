const knex = require('../database')
const bcrypt = require('bcrypt')
const { schemaCadastroUsuario, schemaAtualizarUsuario } = require('../validacoes/schemaUsuarios')


const listarUsarios = async (req, res) => {
    try {
        let usuarios = await knex('user').select('name','email','full_name','join_date');
    return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
    
}

const listarUsarioId = async (req, res) => {
    let {id} = req.params
    try {
        let usuario = await knex('user').where({id}).first();
        if(!usuario){
            return res.status(404).json({mensagem: "Não existe usuário cadastrado com esse id"})
        }

    return res.status(200).json(usuario)
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
    
}

const cadastrarUsuario = async (req, res) => {
  let { name, email, password, full_name } = req.body

  try {
    await schemaCadastroUsuario.validate(req.body);

    const emailJaCadastrado = await knex('user').where({ email }).first();

    if (emailJaCadastrado) {
      return res
        .status(400)
        .json({
          mensagem: 'Email já cadastrado em nossa base de dados.'
        })

    }
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }

  try {
    let senhaHash = await bcrypt.hash(password, 10)

    let novoUsuario = {
      name,
      email,
      password: senhaHash,
      full_name
    }

    let usuario = await knex('user')
      .insert(novoUsuario)
    if (usuario) {
      return res.status(200).json({mensagem: "Cadastro efetuado"})
    }

    return res.status(400).json({ mensagem: 'Usuario não foi cadastrado' })
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }
};


const editarUsuario = async (req, res) => {
  let { id } = req.params;
  let { name, email, password } = req.body;

  
  let user = {}
  try {
    await schemaAtualizarUsuario.validate(req.body);
    const usuarioCadastrado = await knex('user')
      .where({ id })
      .select('*')
      .first()

    if (email) {

      if (usuarioCadastrado.email != email) {
        let emailExiste = await knex('user')
          .where({ email })
          .select('*')
          .first()

        if (emailExiste) {
          return res.status(400).json({ message: "Email já está cadastrado no sistema" })
        }
      }
      user.email = email
    }

    if (name) {
      user.name = name
    }

    if (password) {
      let senhaHash = await bcrypt.hash(password, 10)
      user.password = senhaHash
    }

    let usuario = await knex('user')
      .where({ id })
      .update(user)

    if (usuario) {
        let {password, ...usuario} = user
      return res.status(200).json(usuario)
    }

  } catch (error) {
    return res.status(401).json({ mensagem: error.message })
  };
};

const excluirUsuario = async (req, res)=> {
    let { id } = req.params;
    try {
        let usuario = await knex('user').where('id',id)
        if(!usuario){
            return res.status(404).json({mensagem: 'Usuario não encontrado'})
        }
        await knex('user').where('id',id).del()
        return res.status(202).json({mensagme: `Usuario com id: ${id} foi excluido`})
        
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
}

module.exports = {
    listarUsarios,
    cadastrarUsuario,
    listarUsarioId,
    editarUsuario,
    excluirUsuario
}