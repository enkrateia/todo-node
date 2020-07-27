const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

const Todo = model('Todo', schema);

module.exports = Todo;
