
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section-card').del()
    .then(function () {
      // Inserts seed entries
      return knex('section-card').insert([
        {
          card: 'Task Title 1',
          details:"Jaws",
          section_id: 1
        },
        {
          card: 'Task Title 2',
          details:"Jurassic Park",
          section_id: 2
        },
        {
          card: 'Task Title 3',
          details:"Bee Movie",
          section_id: 2
        },
        {
          card: 'Task Title 4',
          details:"Pokemon",
          section_id: 3
        },
      ]);
    });
};
