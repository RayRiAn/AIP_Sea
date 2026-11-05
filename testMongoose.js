const mongoose = require('mongoose');
// Подключаемся к базе sea2026
mongoose.connect('mongodb://127.0.0.1:27017/sea2026');

// 1. Создаем схему, 
var schema = mongoose.Schema({ 
  name: String, 
  color: String 
});

// 2. Добавляем метод в схему 
schema.methods.swim = function() {
  console.log(this.name + " весело плавает в море!");
};

// 3. Создаем модель на основе схемы
const Dolphin = mongoose.model('Dolphin', schema);

// 4. Создаем экземпляр и сохраняем
const myDolphin = new Dolphin({ name: 'Флиппер', color: 'Серый' });

// 5. Сохраняем и вызываем наш метод
myDolphin.save().then(() => myDolphin.swim());