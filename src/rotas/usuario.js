const express = require('express')
const rotas = express()

const validarToken = require('../intermediarios/validarToken')

const { listarUsarios ,listarUsarioId,cadastrarUsuario, editarUsuario, excluirUsuario} = require('../controladores/usuario')

rotas.post('/', cadastrarUsuario)
rotas.use(validarToken)
rotas.get('/', listarUsarios)
rotas.get('/:id', listarUsarioId)
rotas.put('/:id',editarUsuario)
rotas.delete('/:id', excluirUsuario)


module.exports =  rotas