exports.up = function (knex) {
  return knex.schema.createTable("fares", (tbl) => {
    tbl.increments();
    tbl.integer("order").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("fares");
};
