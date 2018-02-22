const router = require('express').Router();
const { Goal } = require('../db/models');
module.exports = router;


router.get('/:obsessionId', (req, res, next) => {
  return Goal.findAll({
    where: {
      obsessionId: req.params.obsessionId
    }
  })
    .then(goals => {
      if (!goals) {
        res.sendStatus(404);
      }
      res.json(goals);
    })
    .catch(next);
})

router.get('/', (req, res, next) => {
  return Goal.findAll()
    .then(allGoals => {
      if (!allGoals) {
        res.sendStatus(404);
      }
      res.json(allGoals);
    })
    .catch(next);
})

