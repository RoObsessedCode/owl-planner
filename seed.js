// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird");
const {
  db,
  Obsession
} = require('./server/db/models');

const obsessionData = [
  {
    name: 'Salsa',
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

const seed = () => {
  return createObsessions()
    .then(function() {
      console.log('obsessions created')
    });
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
