const Sequelize = require('sequelize');
const db = require('../db');

const Obsession = db.define('obsession', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  purpose: {
    type: Sequelize.TEXT
  }
});

module.exports = Obsession;
