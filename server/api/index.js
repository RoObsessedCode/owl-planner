const router = require('express').Router();
module.exports = router;

router.use('/priority', require('./priority'));
router.use('/obsession', require('./obsession'));
router.use('/goal', require('./goal'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
