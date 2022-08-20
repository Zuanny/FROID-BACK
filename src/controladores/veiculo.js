const knex = require('../database')
const { schemaCadastroVeiculos, schemaAtualizarVeiculos } = require('../validacoes/schemaVeiculos')


const listarVeiculos = async (req, res) => {
    try {
        let veiculos = await knex('veiculos');
    return res.status(200).json(veiculos)
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
    
}

const listarVeiculosId = async (req, res) => {
    let {id} = req.params
    try {
        let veiculo = await knex('veiculos').where({id}).first();
        if(!veiculo){
            return res.status(404).json({mensagem: "Não existe veiculo cadastrado com esse id"})
        }

    return res.status(200).json(veiculo)
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
    
}

const cadastrarVeiculo = async (req, res) => {
  try {
    await schemaCadastroVeiculos.validate(req.body);
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }

  try {

    let NovoVeiculo = { ...req.body}
    

    let veiculos = await knex('veiculos')
      .insert(NovoVeiculo)
    if (veiculos) {
      return res.status(200).json({mensagem: "Cadastro efetuado"})
    }

    return res.status(400).json({ mensagem: 'Veiculo não foi cadastrado' })
  } catch (error) {
    return res.status(400).json({ mensagem: error.message })
  }
};


const editarVeiculo= async (req, res) => {
  let { id } = req.params;
  let {
    vin,
    pressao_pneu,
    status_veiculo,
    status_bateria,
    nivel_combustivel,
    latitude,
    longitude
} = req.body;

  
  let Veiculo = {...req.body}
 

  try {
    await schemaAtualizarVeiculos.validate(req.body);
    
    const VeiculoCadastrado = await knex('veiculos')
      .where({ id })
      .select('*')
      .first()

    if(!VeiculoCadastrado){
        return res.status(404).json({mensagem: "Modelo não encontrado"})
    }
   

    let VeiculoAtualizado = await knex('veiculos')
      .where({ id })
      .update(Veiculo)

   if(!VeiculoAtualizado){
    res.status(400).json({mensagem: "Veículo não foi atualizado"})
   }
   return res.status(203).json({mensagme:`Veículo com id ${id} atualizado`})
  } catch (error) {
    return res.status(500).json({ mensagem: error.message })
  };
};

const excluirVeiculo = async (req, res)=> {
    let { id } = req.params;
    try {
        let Veiculo = await knex('veiculos').where('id',id).first()
        if(!Veiculo){
            return res.status(404).json({mensagem: 'Veiculo não encontrado'})
        }
        await knex('veiculos').where('id',id).del()
        return res.status(202).json({mensagme: `Veiculo com id: ${id} foi excluido`})
        
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
}

module.exports = {
    listarVeiculos,
    listarVeiculosId,
    cadastrarVeiculo,
    editarVeiculo,
    excluirVeiculo
}