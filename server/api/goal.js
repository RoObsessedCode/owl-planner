const router = require('express').Router();
const { Goal } = require('../db/models');
module.exports = router;



router.param('id', (req, res, next, id) => {
  Goal.findById(id)
    .then(goal => {
      if (!goal) res.sendStatus(404);
      req.goal = goal;
      next();
    })
    .catch(next);
})
'api/goals/?=obsessionId=345'
'/api/obsessions/:obsessionId/goals/' --> this needs to go in obsession route

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

router.post('/:obsessionId', (req, res, next) => {
  req.body.obsessionId = req.params.obsessionId;
  Goal.create(req.body)
    .then(newGoal => {
      newGoal.obsessionId = req.params.obsessionId;
      res.json(newGoal);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  req.goal.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});
