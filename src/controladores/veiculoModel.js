const knex = require('../database')
const { schemaCadastroModeloVeiculos, schemaAtualizarModeloVeiculos } = require('../validacoes/schemaModeloVeiculos')


const listarModeloVeiculos = async (req, res) => {
    try {
        let veiculos_modelo = await knex('veiculos_modelo');
    return res.status(200).json(veiculos_modelo)
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
    
}

const listarModeloVeiculosId = async (req, res) => {
    let {id} = req.params
    try {
        let veiculos_modelo = await knex('veiculos_modelo').where({id}).first();
        if(!veiculos_modelo){
            return res.status(404).json({mensagem: "Não existe Modelo de veiculo cadastrado com esse id"})
        }

    return res.status(200).json(veiculos_modelo)
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
    
}

const cadastrarModeloVeiculo = async (req, res) => {
  try {
    await schemaCadastroModeloVeiculos.validate(req.body);
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }

  try {

    let NovoModeloVeiculo = { ...req.body}
    

    let veiculos_modelo = await knex('veiculos_modelo')
      .insert(NovoModeloVeiculo)
    if (veiculos_modelo) {
      return res.status(200).json({mensagem: "Cadastro efetuado"})
    }

    return res.status(400).json({ mensagem: 'Modelo de Veiculo não foi cadastrado' })
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }
};


const editarModeloVeiculo= async (req, res) => {
  let { id } = req.params;
  let { model, volume_total_vendas, conectado, atualizacao_software } = req.body;

  
  let modeloVeiculo = {}
  if (model) {
    modeloVeiculo.model = model
  }

  if (volume_total_vendas) {
    modeloVeiculo.volume_total_vendas = volume_total_vendas
  }

  if (conectado) {
    
    modeloVeiculo.conectado = conectado
  }

  if (atualizacao_software) {
    
    modeloVeiculo.atualizacao_software = atualizacao_software
    }

  try {
    await schemaAtualizarModeloVeiculos.validate(req.body);
    
    const modeloVeiculoCadastrado = await knex('veiculos_modelo')
      .where({ id })
      .select('*')
      .first()
    if(!modeloVeiculoCadastrado){
        return res.status(404).json({mensagem: "Modelo não encontrado"})
    }
   

     await knex('veiculos_modelo')
      .where({ id })
      .update(modeloVeiculo)

    return res.status(202).json({mensagem: `Modelo de veiculo com id ${id} atualizado`})

  } catch (error) {
    return res.status(401).json({ mensagem: error.message })
  };
};

const excluirModeloVeiculo = async (req, res)=> {
    let { id } = req.params;
    try {
        let modeloVeiculo = await knex('veiculos_modelo').where('id',id)
        if(!modeloVeiculo){
            return res.status(404).json({mensagem: 'ModeloVeiculo não encontrado'})
        }
        await knex('veiculos_modelo').where('id',id).del()
        return res.status(202).json({mensagme: `Modelo de Veiculo com id: ${id} foi excluido`})
        
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
}

module.exports = {
    listarModeloVeiculos,
    listarModeloVeiculosId,
    cadastrarModeloVeiculo,
    editarModeloVeiculo,
    excluirModeloVeiculo
}