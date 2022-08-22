const yup = require('yup');

const schemaCadastroUsuario = yup.object().shape({
    name: yup.string().required('O campo nome é obrigatório.'),
    email: yup.string().required('O campo email é obrigatório.').email(),
    password: yup.string().required('O campo senha é obrigatório.').min(4).max(20),
    full_name: yup.string().required('O campo nome é obrigatório.')
});

const schemaAtualizarUsuario = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string().min(6).max(20),
    full_name: yup.string().required('O campo nome é obrigatório.')
});



module.exports = {
    schemaCadastroUsuario,
    schemaAtualizarUsuario
};