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
  //console.log(req.body);
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

app.put('/section/:section_id', function(req, res) {
  console.log(req.body);

  knex('section-status')
    .where('id', req.params.section_id)
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


app.get('/section/:section_id', function(req, res) {
    
  knex 
      .select('*')
      .from('section-status')
      .where('id', req.params.section_id)
      .then(data => res.status(200).json(data))
      .catch(err =>
          res.status(500).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
      );
})

app.get('/section/:section_id/cards', function(req, res) {
  console.log(req.params.section_id)
    
  knex.select('*').from('section-card').join('section-status', 'section-card.section_id', 'section-status.id')
      .where('section-status.id', req.params.section_id)
      .then(data => res.status(200).json(data))
      .catch(err =>
          res.status(500).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
      );
})

app.delete(`/section/:section_id`, function (req, res){
  
   knex('section-status')
       .where('id', req.params.section_id)
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

app.put('/card/:card_id', function(req, res) {
  console.log(req.body);

  knex('section-card')
    .where('id', req.params.card_id)
    .update({
      activity: req.body.activity,
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


app.get('/card/:card_id', function(req, res) {
    
  knex 
      .select('*')
      .from('section-card')
      .where('id', req.params.card_id)
      .then(data => res.status(200).json(data))
      .catch(err =>
          res.status(500).json({
            message:
              'The data you are looking for could not be found. Please try again'
          })
      );
})



app.get('/card/:card_id/tasks', function(req, res) {
    
  knex.select('*').from('section-tasks').join('section-card', 'section-tasks.card_id', 'section-card.id')
  .where('section-card.id', req.params.card_id)
  .then(data => res.status(200).json(data))
  .catch(err =>
      res.status(500).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
  );
})






app.delete(`/card/:card_id`, function (req, res){
  
  knex('section-card')
  .where('id', req.params.card_id)
  .del()
  .then(data => res.status(200).json(data))
  .catch(err =>
      res.status(500).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
  );
})




app.put('/task/:task_id', function(req, res) {
  console.log(req.body);

  knex('section-tasks')
    .where('id', req.params.task_id)
    .update({
      task: req.body.task,
      status: req.body.status,
      card_id: req.body.card_id
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})

app.post('/task', function(req, res) {
  //console.log(req.body);
  knex('section-task')
    .insert({
      task: req.body.task,
      status: req.body.status,
    })
    .then(data => res.status(200).json(data))
    .catch(err => 
        res.status(500).json({
            message:
                'Somethins up'
        }))
})

app.delete(`/task/:task_id`, function (req, res){
  
  console.log(req.body)
  knex('section-tasks')
  .where('id', req.params.task_id)
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
