var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Азовского моря */
router.get('/azov', function(req, res, next) {
  res.render('sea', {
    title: 'Азовское море',
    picture: '/images/AzovskoeMore.jpg',
    desc: 'Азовское море — самое мелкое море в мире. Средняя глубина — около 7 метров, максимальная — 14 метров. Омывает берега России и Украины.'
  });
});

/* Страница Балтийского моря */
router.get('/baltic', function(req, res, next) {
  res.render('sea', {
    title: 'Балтийское море',
    picture: '/images/BaltiiskoeMore.jpg',
    desc: 'Балтийское море — внутриматериковое море Атлантического океана. Омывает берега России, Финляндии, Швеции, Германии, Польши, Литвы, Латвии, Эстонии и Дании.'
  });
});

/* Страница Чёрного моря */
router.get('/black', function(req, res, next) {
  res.render('sea', {
    title: 'Чёрное море',
    picture: '/images/ChernoeMore.jpg',
    desc: 'Чёрное море — внутреннее море бассейна Атлантического океана. Омывает берега России, Украины, Румынии, Болгарии, Турции, Грузии и Абхазии. Средняя глубина — 1240 метров.'
  });
});

module.exports = router;