var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.render('home', { title: 'Trang chủ'});
});

module.exports = router;
