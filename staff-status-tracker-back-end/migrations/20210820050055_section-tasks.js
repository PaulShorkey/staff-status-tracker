exports.up = function(knex) {
    return knex.schema.createTable('section-tasks', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('task').notNullable();
      table.string('status');
      table.integer('card_id');

      table.foreign('card_id').references('id').inTable("section-card"); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('section-tasks');
  };