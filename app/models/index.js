const dbConfig = require('../config/db.config');
const todo = require('./todo.model.js');

const db = {
  url: dbConfig.url,
  models: {
    todo,
  },
};

module.exports = db;
