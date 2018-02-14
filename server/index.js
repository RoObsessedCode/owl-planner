const path = require('path')
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db')

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// any remaining requests with an extension (.js, .css, etc.)
app.use(morgan('dev'))

//body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// auth and api routes
//app.use('/api/priority', require('./api/priority'))
app.use('/api', require('./api'))

//Fill em in ^^

app.use(express.static(path.join(__dirname, '..', 'public')))

//sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/public/index.html'))
})

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error.')
})

db.sync({ force: true })
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })


