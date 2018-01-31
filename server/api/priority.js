const router = require("express").Router();
const { Priority } = require("../db/models");
module.exports = router;

router.param("id", function(req, res, next, id) {
  Priority.findById(id)
    .then(priority => {
      if (!priority) res.sendStatus(404);
      req.product = product;
      next();
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  Priority.findAll()
    .then(priority => {
      if (!priority) {
        res.sendStatus(404);
      }
      res.json(priority);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Priority.create(req.body)
    .then(priority => {
      console.log("!!!!!our priority!!!!!!");
      res.json(priority);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  req.priority
    .update(req.body)
    .then(updatedPriority => {
      res.json(updatedPriority);
    })
    .catch(next);
});

// router.get('/:priorityId', (req, res, next) => {
//   Priority.findById(req.params.categoryId, )
// })
