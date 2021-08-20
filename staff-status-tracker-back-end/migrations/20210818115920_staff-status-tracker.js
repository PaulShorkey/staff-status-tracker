exports.up = function(knex) {
    return knex.schema.createTable('section-status', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('section').notNullable();
      table.string('status');
      table.string('poc');
      table.string('description');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('section-status');
  };