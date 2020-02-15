'use strict';

module.exports = function(app) {
  const todos = require('../controllers/todosController');

  app.route('/todos')
    .get(todos.getTodos)
    .post(todos.createTodo)
    .delete(todos.batchDelete);

  app.route('/todos/:todoId')
    .get(todos.getTodo)
    .patch(todos.updateTodo)
    .delete(todos.deleteTodo);
};
