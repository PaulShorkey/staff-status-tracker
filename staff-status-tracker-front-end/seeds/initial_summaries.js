
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section-status').del()
    .then(function () {
      // Inserts seed entries
      return knex('section-status').insert([
        {
          id: 1, 
          section: 'S1',
          status: "",
          comments:""
        },
        {
          id: 2, 
          section: 'S2',
          status: "",
          comments:""
        },
        {
          id: 3, 
          section: 'S3',
          status: "",
          comments:""
        },
      ]);
    });
};
