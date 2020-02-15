'use strict';

const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.getTodos = function(req, res) {
  Todo.find({}, (err, todos) => {
    if (err) res.send(err);
    res.json(todos);
  });
};

exports.createTodo = function(req, res) {
  const newTodo = new Todo(req.body);
  // console.log(newTodo.save())
  newTodo.save((err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.getTodo = function(req, res) {
  Todo.findById(req.params.todoId, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.updateTodo = function(req, res) {
  Todo.findOneAndUpdate(
    {_id: req.params.todoId},
    req.body,
    { new: true },
    (err, todo) => {
      if (err) res.send(err);
      res.json(todo);
    },
  );
};

exports.deleteTodo = function(req, res) {
  Todo.remove(
    { _id: req.params.todoId },
    (err, result) => {
      if (err) res.send(err);
      res.json(result);
    });
};

exports.batchDelete = function(req, res) {
  Todo.collection.deleteMany(
    (err, result) => {
      if (err) res.send(err);
      res.json(result);
    },
  );
};
