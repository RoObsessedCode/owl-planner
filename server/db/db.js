const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/owl_planner', {
    logging: false
  }
)
module.exports = db
