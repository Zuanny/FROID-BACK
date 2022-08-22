const yup = require('yup');

const schemaLogin = yup.object().shape({

    name: yup.string().required('O campo Usuario é obrigatório.'),
    password: yup.string().required('O campo Senha é obrigatório.').min(5).max(20)
});

module.exports = schemaLogin;