const express = require('express')
const rotas = express()

const {
    listarVeiculos,
    listarVeiculosId,
    cadastrarVeiculo,
    editarVeiculo,
    excluirVeiculo
} = require('../controladores/veiculo')

rotas.get('/',listarVeiculos )
rotas.get('/:id', listarVeiculosId)
rotas.post('/', cadastrarVeiculo)
rotas.patch('/:id', editarVeiculo)
rotas.delete('/:id', excluirVeiculo)

module.exports =  rotas