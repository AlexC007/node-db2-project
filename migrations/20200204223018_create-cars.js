
exports.up = function(knex,Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN', 128).unique().notNullable();
        tbl.text('make').notNullable();
        tbl.text('model').notNullable();
        tbl.decimal('milage').notNullable();
        tbl.text('transmission type');
        tbl.text('transmission status');

      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};

  
  