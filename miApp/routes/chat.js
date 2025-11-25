var express = require('express');
var router = express.Router();

router.get('/' ,function(req, res) {
  res.render('chat', { title: 'Chat', user: req.session.user });
});

module.exports = router