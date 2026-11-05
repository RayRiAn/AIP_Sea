const mongoose = require('mongoose');

// Подключаемся к нашей базе (год 2026)
mongoose.connect('mongodb://127.0.0.1:27017/sea2026');

// Создаем модель (схему) для теста. 
// Mongoose сам сделает из 'Dolphin' коллекцию 'dolphins'
const Dolphin = mongoose.model('Dolphin', { name: String, color: String });

// Создаем экземпляр
const myDolphin = new Dolphin({ name: 'Флиппер', color: 'Серый' });

// Сохраняем в базу
myDolphin.save().then(() => console.log('Дельфин успешно сохранен в базу! 🐬'));