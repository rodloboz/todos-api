'use strict';

const express = require('express');
const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.listen(port);

const mongoose = require('mongoose');
app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require('./mongo')().then(() => next());
  }
});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todosdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const cors = require('cors');
app.use(cors());

const routes = require('./api/routes/todosRoutes');
routes(app);

module.exports = app;
