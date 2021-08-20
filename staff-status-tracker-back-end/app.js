// app.js
const express = require('express');
const cors = require('cors');
//const { development } = require('./knexfile.js');

const app = express();
const PORT = process.env.PORT || 3001;
//console.log(process.env)
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV]);

app.use(express.json());
app.use(cors());

app.get('/status', function(req, res) {
  knex
    .select('*')
    .from('section-status')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post('/status', function(req, res) {
  console.log(req.body);
  knex('section-status')
    .insert({
      section: req.body.section,
      status: req.body.status,
      comments: req.body.comments
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})

app.put('/status/:id', function(req, res) {
  console.log("Hello Put")
  console.log(req.body);

  knex('section-status')
    .where('id', req.params.id)
    .update({
      //section: req.body.section,
      status: req.body.status,
      //comments: req.body.comments
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})


app.get('/status/:id', function(req, res) {
    
  knex 
      .select('*')
      .from('section-status')
      .where('id', req.params.id)
      .then(data => res.status(200).json(data))
      .catch(err =>
          res.status(500).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
      );
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});

// table.increments('id'); // adds an auto incrementing PK column
// table.string('section').notNullable();
// table.string('status');
// table.string('comments');