const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_PASSWORD;


const validarToken = (req, res, next) => {
    
   let {authorization} =  req.headers
   
    let usuario
    // console.log( req.headers);
    
    if(!authorization){
        return res.status(403).json({menssagem: "Você precisa fazer login e informar o token para acessar essa rota"})
    }

    let token = authorization.replace('Bearer ', '').trim();
    try {
        usuario = jwt.verify(token, jwtSecret);
    }
    catch (error) {
        return res.status(401).json({
            mensagem: 'Token inválido'
        })
    }
    let user = usuario.usuario
    req.usuario = user;
    
    next();
};

module.exports = validarToken;