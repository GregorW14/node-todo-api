const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then(doc) => {
//   console.log(doc);
// }

Todo.findByIdAndRemove('5a173dba66f537bbd0a20659').then((doc) => {
  console.log(doc);
});
