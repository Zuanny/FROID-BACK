const yup = require('yup');

const schemaCadastroVeiculos = yup.object().shape({
    vin: yup.string().required('O campo vin é obrigatório.'),
    odometer: yup.number().required('O campo pressao_pneu é obrigatório.'),
    tirePressure: yup.string().required('O campo pressao_pneu é obrigatório.'),
    status: yup.string().required('O campo status_bateria é obrigatório.'),
    batteryStatus: yup.string().required('O campo status_bateria é obrigatório.'),
    fuelLevel: yup.number().required('O campo nivel_combustivel é obrigatório.'),
    latitude: yup.number().required('O campo latitude é obrigatório.'),
    longitude: yup.number().required('O campo longitude é obrigatório.'),
    vehicle_id: yup.number().required('O campo id vehicle é necessário')
});

const schemaAtualizarVeiculos = yup.object().shape({
    vin: yup.string(),
    odometer: yup.number(),
    tirePressure: yup.number(),
    status: yup.string(),
    batteryStatus: yup.string(),
    nivel_combustivel: yup.number(),
    latitude: yup.number(),
    longitude: yup.number(),
    vehicle_id: yup.number()
});



module.exports = {
    schemaCadastroVeiculos,
    schemaAtualizarVeiculos
};