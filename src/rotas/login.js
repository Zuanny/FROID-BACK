const express = require('express')
const rotas = express()

const login = require('../controladores/login')

rotas.post('/', login)
// rotas.get()
// rotas.patch()
// rotas.delete()

module.exports =  rotas