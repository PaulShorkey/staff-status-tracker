exports.up = function(knex) {
    return knex.schema.createTable('section-tasks', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('task').notNullable();
      table.string('status');
      table.string('card');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('section-tasks');
  };