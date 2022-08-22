const yup = require('yup');

const schemaCadastroModeloVeiculos = yup.object().shape({
    model: yup.string().required('O campo nome é obrigatório.'),
    volumeTotal: yup.number().required('O campo email é obrigatório.'),
    connected: yup.number().required('O campo senha é obrigatório.'),
    softwareUpdates: yup.number().required('O campo nome é obrigatório.')
});

const schemaAtualizarModeloVeiculos = yup.object().shape({
    model: yup.string(),
    volumeTotal: yup.number(),
    connected: yup.number(),
    softwareUpdates: yup.number()
});



module.exports = {
    schemaCadastroModeloVeiculos,
    schemaAtualizarModeloVeiculos
};