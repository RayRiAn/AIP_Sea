const { MongoClient } = require('mongodb');

// Адрес нашей локальной базы данных
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Имя базы данных
const dbName = 'sea2026';

async function main() {
  // Подключаемся к серверу
  await client.connect();
  console.log('Успешное подключение к серверу');

  const db = client.db(dbName);
  const collection = db.collection('documents');

  // Добавляем тестовые документы
  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  console.log('Добавленные документы =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());