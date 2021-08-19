exports.up = function(knex) {
    return knex.schema.createTable('section-status', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('section').notNullable();
      table.string('status');
      table.string('comments');
      // table.timestamps(true, true); // adds created_at and updated_at
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('section-status');
  };