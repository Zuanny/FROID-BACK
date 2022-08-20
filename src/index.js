require('dotenv').config()
const express = require('express')
const app = express()


const usuario = require('./rotas/usuario')
const login = require('./rotas/login')
const veiculo = require('./rotas/veiculo')
const veiculoModel = require('./rotas/veiculoModel')
const validarToken = require('./intermediarios/validarToken')


app.use(express.json())
app.use('/login',login)
app.use('/usuario',usuario)
app.use(validarToken)
app.use('/veiculo',veiculo)
app.use('/veiculomodel',veiculoModel)


app.listen(process.env.PORT || '3000')