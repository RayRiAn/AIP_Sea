var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Азовского моря */
router.get('/azov', function(req, res, next) {
  res.send("<h1>Азовское море</h1>")
});

/* Страница Балтийского моря */
router.get('/baltic', function(req, res, next) {
  res.send("<h1>Балтийское море</h1>")
});

/* Страница Чёрного моря */
router.get('/black', function(req, res, next) {
  res.send("<h1>Чёрное море</h1>")
});

module.exports = router;