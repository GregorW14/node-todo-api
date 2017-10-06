// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect');
  }
  console.log('Connected successfully');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59cee997f2d22e435cf78c2b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // db.collection('Todos').find({
  //   _id: new ObjectID('59cee997f2d22e435cf78c2b')
  // }).count().then((count) => {
  //   console.log(`Todos count:${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'Gregor'
  }).toArray().then((docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });
  db.close();
});
