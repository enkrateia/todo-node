const router = require('express').Router();

const todo = require('../controllers/todo.controller');

router.post('/', todo.create);

module.exports = router;
