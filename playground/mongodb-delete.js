// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect');
  }
  console.log('Connected successfully');

  //deleteMany

  //db.collection('Todos').deleteMany({text: 'Walk dog'}).then((result) => {
  //  console.log(result);
  //});

  //deleteOne

  //db.collection('Todos').deleteOne({text: 'Walk dog'}).then((result) => {
  //  console.log(result);
  //});

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })
});
