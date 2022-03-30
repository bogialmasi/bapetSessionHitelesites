module.exports = (req,res,next) =>{
    //console.log(req.session.szamlalo);
    return res.render('index', {counter: req.session.szamlalo});
}