/////// Server config
const express = require('express'); // import the express package
const cors = require('cors')
const server = express(); // creates the server
server.use(express.json());
server.use(cors())
// Knex config
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
///////

// List all the records
server.get('/api/list', (req, res) => {
  db("cars").then(cars => {
    res.status(200).json(cars);
    console.log('GET request complete')
  }).catch(error => {
      res.status(500).json({ error: "Error retrieving cars", info: error })
  });
});

///////
// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);
//