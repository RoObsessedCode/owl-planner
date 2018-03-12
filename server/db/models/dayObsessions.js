const Sequelize = require('sequelize');
const db = require('../db');

const DayObsessions = db.define('dayObsessions', {
  date: {
    type: Sequelize.DATE,
    default: Sequelize.NOW,
    primaryKey: true
  },
  day: {
    type: Sequelize.VIRTUAL,
    get() {
      const date = this.date;
      const day = date.getDay();
      return day;
    }
  }
})

module.exports = DayObsessions;
