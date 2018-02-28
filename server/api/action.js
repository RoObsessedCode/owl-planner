const router = require('express').Router()
const { Action } = require('../db/models');
module.exports = router;

router.param('id', (req, res, next, id) => {
  Action.findById(id)
    .then(action => {
      if (!action) res.sendStatus(404);
      req.action = action;
      next();
    })
    .catch(next);
})

router.get('/:goalId', (req, res, next) => {
  return Action.findAll({
    where: { goalId: req.params.goalId }
  })
    .then(actions => {
      if (!actions) {
        res.sendStatus(404);
      }
      res.json(actions);
    })
    .catch(next);
});

router.post('/:goalId', (req, res, next) => {
  req.body.goalId = req.params.goalId;
  Action.create(req.body)
    .then(newAction => {
      newAction.goalId = req.params.goalId;
      res.json(newAction);
    })
    .catch(next);
})
