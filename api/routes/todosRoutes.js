'use strict';
module.exports = function(app) {
  const todos = require('../controllers/todosController');

  app.route('/todos')
    .get(todos.list_all_todos)
    .post(todos.create_a_todo);

  app.route('/todos/:todoId')
    .get(todos.read_a_todo)
    .patch(todos.update_a_todo)
    .delete(todos.delete_a_todo);
};
