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



/******************** Section Management  *******************************************/
app.get('/section', function(req, res) {
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

app.post('/section', function(req, res) {
  console.log(req.body);
  knex('section-status')
    .insert({
      section: req.body.section,
      status: req.body.status,
      poc: req.body.poc,
      description: req.body.description
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})

app.put('/status/:id', function(req, res) {
  console.log(req.body);

  knex('section-status')
    .where('id', req.params.id)
    .update({
      section: req.body.section,
      status: req.body.status,
      poc: req.body.poc,
      description: req.body.description
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})


app.get('/section/:id', function(req, res) {
    
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

app.delete(`/section/:id`, function (req, res){
  
   knex('section-status')
       .where('id', req.params.id)
       .del()
       .then(data => res.status(200).json(data))
       .catch(err =>
           res.status(500).json({
             message:
               'The data you are looking for could not be found. Please try again'
           })
       );
})
/************************ Card Management ******************************************/
app.get('/card', function(req, res) {
  knex
    .select('*')
    .from('section-card')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post('/card', function(req, res) {
  console.log(req.body);
  knex('section-card')
    .insert({
      activity: req.body.activity,
      status: req.body.status,
      details: req.body.details,
      section: req.body.section
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})

app.put('/card/:id', function(req, res) {
  console.log(req.body);

  knex('section-card')
    .where('id', req.params.id)
    .update({
      activity: req.body.activity,
      status: req.body.status,
      details: req.body.details,
      section: req.body.section
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})


app.get('/card/:id', function(req, res) {
    
  knex 
      .select('*')
      .from('section-card')
      .where('id', req.params.id)
      .then(data => res.status(200).json(data))
      .catch(err =>
          res.status(500).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
      );
})

app.delete(`/card/:id`, function (req, res){
  
   knex('section-card')
       .where('id', req.params.id)
       .del()
       .then(data => res.status(200).json(data))
       .catch(err =>
           res.status(500).json({
             message:
               'The data you are looking for could not be found. Please try again'
           })
       );
})


/***********************************************************************************/
app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
