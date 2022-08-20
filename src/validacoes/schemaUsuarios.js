const yup = require('yup');

const schemaCadastroUsuario = yup.object().shape({
    nome: yup.string().required('O campo nome é obrigatório.'),
    email: yup.string().required('O campo email é obrigatório.').email(),
    senha: yup.string().required('O campo senha é obrigatório.').min(4).max(20),
    nome_completo: yup.string().required('O campo nome é obrigatório.')
});

const schemaAtualizarUsuario = yup.object().shape({
    nome: yup.string(),
    email: yup.string().email(),
    senha: yup.string().min(6).max(20)
});



module.exports = {
    schemaCadastroUsuario,
    schemaAtualizarUsuario
};