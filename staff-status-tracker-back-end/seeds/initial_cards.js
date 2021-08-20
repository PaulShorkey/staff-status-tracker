
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section-card').del()
    .then(function () {
      // Inserts seed entries
      return knex('section-card').insert([
        {
          card: 'Task Title 1',
          status: "Red",
          details:"Jaws",
          section_id: 1
        },
        {
          card: 'Task Title 2',
          status: "Yellow",
          details:"Jurassic Park",
          section_id: 2
        },
        {
          card: 'Task Title 3',
          status: "Green",
          details:"Bee Movie",
          section_id: 2
        },
        {
          card: 'Task Title 4',
          status: "Yellow",
          details:"Pokemon",
          section_id: 3
        },
      ]);
    });
};
