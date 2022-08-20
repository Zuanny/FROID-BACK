const express = require('express')
const rotas = express()

const {
    listarModeloVeiculos,
    listarModeloVeiculosId,
    cadastrarModeloVeiculo,
    editarModeloVeiculo,
    excluirModeloVeiculo
} = require('../controladores/veiculoModel')

rotas.get('/',listarModeloVeiculos )
rotas.get('/:id', listarModeloVeiculosId)
rotas.post('/', cadastrarModeloVeiculo)
rotas.patch('/:id',editarModeloVeiculo)
rotas.delete('/:id', excluirModeloVeiculo)

module.exports =  rotas