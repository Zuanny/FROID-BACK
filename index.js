const express = require('express')
const app = express()

const usuario = require('./rotas/usuario')
const veiculo = require('./rotas/veiculo')
const veiculoModel = require('./rotas/veiculoModel')

app.use(express.json())
app.use('/usuario',usuario)
app.use('/veiculo',veiculo)
app.use('/veiculomodel',veiculoModel)

app.use(process.env.PORT || '3000')