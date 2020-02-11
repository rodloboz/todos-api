'use strict';
const mongoose = require('mongoose'),
  Todo = mongoose.model('Todo');

exports.list_all_todos = function(req, res) {
  Todo.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_todo = function(req, res) {
  const new_todo = new Todo(req.body);
  new_todo.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_todo = function(req, res) {
  Todo.findById(req.params.todoId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_todo = function(req, res) {
  Quote.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_todo = function(req, res) {
  Todo.remove({
    _id: req.params.todoId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Todo successfully deleted' });
  });
};