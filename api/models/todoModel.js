'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter the title for the todo'
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
