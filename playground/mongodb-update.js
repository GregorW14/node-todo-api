// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect');
  }
  console.log('Connected successfully');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59ceeae73b5be33ab8ed04bd')
  }, {
    $set: {
      name: 'Gregor'
    },
    $inc: {
      age: 1
    }
  },{
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
});
