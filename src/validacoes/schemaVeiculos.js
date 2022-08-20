const yup = require('yup');

const schemaCadastroVeiculos = yup.object().shape({
    vin: yup.string().required('O campo vin é obrigatório.'),
    pressao_pneu: yup.number().required('O campo pressao_pneu é obrigatório.'),
    status_veiculo: yup.string().required('O campo status_bateria é obrigatório.'),
    status_bateria: yup.string().required('O campo status_bateria é obrigatório.'),
    nivel_combustivel: yup.number().required('O campo nivel_combustivel é obrigatório.'),
    latitude: yup.number().required('O campo latitude é obrigatório.'),
    longitude: yup.number().required('O campo longitude é obrigatório.')
});

const schemaAtualizarVeiculos = yup.object().shape({
    vin: yup.string(),
    pressao_pneu: yup.number(),
    status_veiculo: yup.string(),
    status_bateria: yup.string(),
    nivel_combustivel: yup.number(),
    latitude: yup.number(),
    longitude: yup.number()
});



module.exports = {
    schemaCadastroVeiculos,
    schemaAtualizarVeiculos
};