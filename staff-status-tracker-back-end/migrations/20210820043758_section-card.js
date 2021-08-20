exports.up = function(knex) {
    return knex.schema.createTable('section-card', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('card').notNullable();
      table.string('details');
      table.integer('section_id');

      table.foreign('section_id').references('id').inTable("section-status");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('section-card');
  };