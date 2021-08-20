
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section-status').del()
    .then(function () {
      // Inserts seed entries
      return knex('section-status').insert([
        {
          id: 1, 
          section: 'S1',
          status: "Red",
          comments:""
        },
        {
          id: 2, 
          section: 'S2',
          status: "Green",
          comments:""
        },
        {
          id: 3, 
          section: 'S3',
          status: "Green",
          comments:""
        },
      ]);
    });
};
