var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('restringida',{ title: 'Zona Restringida', user: req.session.user })
})

module.exports = router

