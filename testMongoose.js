const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sea2026');

var Sea = require('./models/sea.js').Sea

var sea = new Sea({
  title: "Азовское море",
  nick: "azov",
})

sea.save();