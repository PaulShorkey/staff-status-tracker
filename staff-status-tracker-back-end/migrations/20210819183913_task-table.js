exports.up = function(knex) {
    return knex.schema.createTable('task1', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('poc').notNullable();
      table.string('status');
      table.string('details');
      // table.timestamps(true, true); // adds created_at and updated_at
    });
  };

exports.down = function(knex) {
  
};
