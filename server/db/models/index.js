const Priority = require('./priority');
const Obsession = require('./obsession');
const Goal = require('./goal');
const db = require('../db');

Obsession.hasMany(Goal);

module.exports =  {db, Priority, Obsession, Goal};
