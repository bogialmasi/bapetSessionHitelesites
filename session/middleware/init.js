module.exports = (req, res, next) =>{
    req.session.szamlalo = 0;
    return next();
}