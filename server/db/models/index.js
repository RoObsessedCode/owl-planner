const Priority = require('./priority');
const Obsession = require('./obsession');
const Goal = require('./goal');
const Action = require('./action')
const db = require('../db');

Obsession.hasMany(Goal);
// Obsession.hasMany(Action);
Goal.hasMany(Action);


module.exports =  {db, Priority, Obsession, Goal, Action};

/*
O1           O2
G1           G2
           A(G2)

*/

// const app = Obsession = {}

// app.get('/api/obsessions/:id', (req, res, next) => {
//   Obsession.findById(req.params.id, {
//     include: [{
//       model: Goal,
//       include: [{
//         model: Action
//       }]
//     }]
//   })
//   .then(obsession => res.json(obsession))
//   .catch(next)
// })

// const Obsession = db.define('obsesssion', {
//   name: String,
// }, {

  //scopes takes a function this makes it lazy since it invokes function when we call db.sync by then all models have been generated
  scopes: {
    populated2Levels: () => ({
      include: [{
        model: db.model('goal'),
        include: [{
          model: db.model('action')
        }]
      }]
    })
  }
})

// // in routes

// Obsession.scope('populated2Levels')
// .findById(4)
// .then(thing => res.json(thing))
// .catch(next)
