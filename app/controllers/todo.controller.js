const db = require('../models');
const Todo = db.models.todo;

exports.create = (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    description: req.body.description,
  });

  todo
    .save()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Task.',
      })
    );
};
