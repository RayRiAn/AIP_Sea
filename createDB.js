const { MongoClient } = require('mongodb');
var data = require("./data.js").data;

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'sea2026';

async function main() {
  await client.connect();
  console.log('Успешное подключение к серверу');

  const db = client.db(dbName);
  
  // ВАЖНО: называем коллекцию 'seas' (моря)
  const collection = db.collection('seas');

  // Очищаем коллекцию перед записью (на случай, если там что-то было)
  await collection.deleteMany({});

  // Записываем данные из data.js
  const insertResult = await collection.insertMany(data);
  console.log('Добавленные документы =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());