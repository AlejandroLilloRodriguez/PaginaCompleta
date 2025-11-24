var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('registrarse',{ title: 'Express' })
})

router.post('/',function(req,res){
    req.session.user = req.body.email;
    res.redirect('/restringida')
})

module.exports = router;