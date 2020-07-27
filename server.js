const express = require('express');
const { connect } = require('mongoose');
const db = require('./app/config/db.config');
const todoRoutes = require('./app/routes/todo.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.use('/api/todo', todoRoutes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
