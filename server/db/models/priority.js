const Sequelize = require('sequelize');
const db = require('../db');

const Priority = db.define('priority', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Priority;
