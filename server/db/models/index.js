const Priority = require('./priority');
const Obsession = require('./obsession');
const Goal = require('./goal');
const Action = require('./action')
const db = require('../db');

Obsession.hasMany(Goal);
Obsession.hasMany(Action);
Goal.hasMany(Action);


module.exports =  {db, Priority, Obsession, Goal, Action};
