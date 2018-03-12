const router = require("express").Router();
const { DayObsessions } = require("../db/models");
module.exports = router;

router.post("/", (req, res, next) => {
  console.log('DAYOBSESSION', DayObsessions)
  DayObsessions.create(req.body)
    .then(newDayObsession => {
      console.log(' do you think we even get here')
      res.json(newDayObsession)
    })
    .catch(next)
})
