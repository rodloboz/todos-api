'use strict';

const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/mongo')[env];
console.log(config);

module.exports = () => {
  const envUrl = process.env[config.use_env_variable];
  const localUrl = `mongodb://${config.host}/${config.database}`;
  const mongoUrl = envUrl || localUrl;
  return mongoose.connect(mongoUrl);
};
