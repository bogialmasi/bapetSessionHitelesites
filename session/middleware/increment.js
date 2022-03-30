module.exports = (req,res,next) =>{
    //console.log(req.session);
    req.session.szamlalo++;
    return next();
}