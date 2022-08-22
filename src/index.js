require('dotenv').config()
const express = require('express')
const app = express()


const usuario = require('./rotas/usuario')
const login = require('./rotas/login')
const veiculo = require('./rotas/veiculoData')
const veiculoModel = require('./rotas/veiculoModel')
const validarToken = require('./intermediarios/validarToken')
const cors = require('cors')

const corsOptions = {
    exposedHeaders: ["x-access-token"],
  };
  
app.use(cors(corsOptions));

app.use(express.json())
app.use('/login',login)
app.use('/usuario',usuario)
app.use(validarToken)
app.use('/veiculo',veiculo)
app.use('/veiculomodel',veiculoModel)


app.listen(process.env.PORT || '3000')