module.exports = (req, res, next) => {
    console.log(`-->${req.session.szamlalo}`);
    if (typeof req.session.szamlalo === 'undefined' || req.session.szamlalo === null) {
        
        return res.render('newway');
    }
    return next();
}