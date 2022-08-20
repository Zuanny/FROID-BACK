const yup = require('yup');

const schemaLogin = yup.object().shape({

    email: yup.string().required('O campo email é obrigatório.').email(),
    senha: yup.string().required('O campo senha é obrigatório.').min(5).max(20)
});

module.exports = schemaLogin;