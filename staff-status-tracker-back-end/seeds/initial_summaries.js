
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section-status').del()
    .then(function () {
      // Inserts seed entries
      return knex('section-status').insert([
        {
          section: 'S1',
          status: "Red",
          poc:"Paul Dykes",
          description:""
        },
        {
          section: 'S2',
          status: "Green",
          poc:"Kerim H-K",
          description:""
        },
        {
          section: 'S3',
          status: "Green",
          poc:"Paul S",
          description:""
        },
        {
          section: 'S3',
          status: "Green",
          poc:"Edgar",
          description:""
        },
      ]);
    });
};
