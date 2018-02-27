const Sequelize = require('sequelize');
const db = require('../db');

const Action = db.define('action', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  duration: {
    type: Sequelize.DECIMAL
  }
});

module.exports = Action;
