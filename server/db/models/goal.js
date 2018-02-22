const Sequelize = require('sequelize');
const db = require('../db');

const Goal = db.define('goal', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  term: {
    field: 'term_duration',
    type: Sequelize.ENUM,
    values: ['1-month', '3-month', '1-year', '5-year'],
    allowNull: false
  }
  // term: {
  //   type: Sequelize.STRING
  // }
});


module.exports = Goal;
