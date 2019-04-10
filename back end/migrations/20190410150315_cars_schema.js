exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', function(tbl) {
    tbl.increments();
    tbl.string('make', 255);
    tbl.float('year');
    tbl.string('color', 255);
    tbl.float('price');
    tbl.boolean('hasSunroof');
    tbl.boolean('isFourWheelDrive');
    tbl.boolean('hasLowMiles');
    tbl.boolean('hasPowerWindows');
    tbl.boolean('hasNavigation');
    tbl.boolean('hasHeatedSeats');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};