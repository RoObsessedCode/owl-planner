const router = require("express").Router();
const { Obsession } = require("../db/models");
module.exports = router;

router.param("id", function(req, res, next, id) {
  Obsession.findById(id)
    .then(obsession => {
      if (!obsession) res.sendStatus(404);
      req.obsession = obsession;
      next();
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Obsession.findAll()
    .then(allObsessions => {
      if (!allObsessions) {
        res.sendStatus(404);
      }
      res.json(allObsessions)
    })
    .catch(next);
})

router.post("/", (req, res, next) => {
  Obsession.create(req.body)
    .then(newObsession => {
      res.json(newObsession);
    })
    .catch(next);
});


router.delete("/:id", (req, res, next) => {
  req.obsession.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
