const yup = require('yup');

const schemaCadastroModeloVeiculos = yup.object().shape({
    model: yup.string().required('O campo nome é obrigatório.'),
    volume_total_vendas: yup.number().required('O campo email é obrigatório.'),
    conectado: yup.number().required('O campo senha é obrigatório.'),
    atualizacao_software: yup.number().required('O campo nome é obrigatório.')
});

const schemaAtualizarModeloVeiculos = yup.object().shape({
    model: yup.string(),
    volume_total_vendas: yup.number(),
    conectado: yup.number(),
    atualizacao_software: yup.number()
});



module.exports = {
    schemaCadastroModeloVeiculos,
    schemaAtualizarModeloVeiculos
};