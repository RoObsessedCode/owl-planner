// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require('bluebird');
const {
  db,
  Obsession,
  Goal,
  Action
} = require('./server/db/models');

const obsessionData = [
  {
    name: 'Dance',
    description: 'Practice Salsa dancing for 15 minutes everyday',
    purpose: 'bring alive what has always been a part of me'
  },
  {
    name: 'Eat Healthy and Nutritious Foods',
    description: '0 sugar, small portions',
    purpose: 'live a long healthy life'
  },
  {
    name: 'Fitness',
    description: 'Stay fit, strong, and agile',
    purpose: 'be strong, dominate, and expand confidence'
  },
  {
    name: 'Public Speaking',
    description: 'Give speeches and improve upon each one',
    purpose: 'Be a top 10 motivational speaker, globally'
  }
];

const goalData = [
  {
    name: 'Compete at salsa dance competition',
    description: 'Test out my practiced salsa dance skills',
    term: '3-month',
    obsessionId: 1
  },
  {
    name: 'Weigh in at 200lbs',
    description: 'Work out and eat right to eventually reach goal weight',
    term: '1-year',
    obsessionId: 3
  },
  {
    name: 'Be a speaker at Brooklyn.js',
    description: 'Be passionate about material and practice to the point you can present it at a meetup event',
    term: '3-month',
    obsessionId: 4
  },
  {
    name: '6-pack abs lets gooo',
    description: 'maybe even 8-packs',
    term: '1-year',
    obsessionId: 3
  }
];

const actionData = [
  {
    name: 'Run 3 miles',
    description: 'interval training',
    duration: '30 minutes',
    goalId: 3,
    obsessionId: 3
  },
  {
    name: 'Eat a Vegetable',
    description: 'no dressings; handful serving',
    duration: 'Three times a day',
    goalId: 3,
    obsessionId: 3
  },
  {
    name: 'Practice to Rythm',
    description: 'Get the beat down',
    duration: '10 minutes a day',
    goalId: 4,
    obsessionId: 1

  }
]


// Campus Seeding
const promiseArrObsessions = () => {
  return obsessionData.map(obsession => {
    return Obsession.build(obsession);
  });
};

const createObsessions = () => {
  return Promise.map(promiseArrObsessions(), function (obsession) {
    return obsession.save();
  });
};

const promiseArrGoals = () => {
  return goalData.map(goal =>  {
    return Goal.build(goal);
  });
};

const createGoals = () => {
  return Promise.map(promiseArrGoals(), function (goal) {
    return goal.save();
  });
};

const promiseArrActions = () => {
  return actionData.map(action => {
    return Action.build(action);
  });
};

const createActions = () => {
  return Promise.map(promiseArrActions(), function(action) {
    return action.save();
  })
}

const seed = () => {
  return createObsessions()
    .then(() => createGoals())
    .then(() => createActions());
};

db.sync({ force: true })
  .then(function () {
    console.log('Dropped old data, that beat af data is gone');
    return seed();
  })
  .then(function () {
    console.log('Successfully inserted new dope af data!');
  })
  .catch(function (err) {
    console.error('Shit fam, there was a problem', err, err.stack);
  })
  .finally(function () {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log('connection closed, we out'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
