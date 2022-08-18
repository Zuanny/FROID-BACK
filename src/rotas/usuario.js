const express = require('express')
const rotas = express()

const {listarUsuario} = require('../controladores/usuario')


// rotas.post()
rotas.get('/', listarUsuario)
// rotas.patch()
// rotas.delete()


module.exports =  rotas