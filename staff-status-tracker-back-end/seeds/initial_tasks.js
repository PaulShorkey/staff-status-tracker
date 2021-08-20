
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section-tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('section-tasks').insert([
        {
          task: 'Do a thing',
          status: "Yellow",
          card_id: 1
        },
        {
          task: 'Dance',
          status: "Green",
          card_id: 1
        },
        {
          task: 'Summon an Eldrich Terror',
          status: "Yellow",
          card_id: 1
        },
        {
          task: 'Throw a Pokeball',
          status: "Red",
          card_id: 2
        },
        {
          task: 'Tie shoes',
          status: "Green",
          card_id: 2
        },
        {
          task: 'Commit to the bit',
          status: "Red",
          card_id: 3
        },
        {
          task: 'Cry',
          status: "Green",
          card_id: 3
        },
        {
          task: 'Sleep',
          status: "Red",
          card_id: 3
        },
        {
          task: 'Do a thing',
          status: "Red",
          card_id: 3
        },
      ]);
    });
};
