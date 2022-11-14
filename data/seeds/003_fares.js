exports.seed = function (knex) {
  return knex("fares").insert([
    { id: 1, order: 50000 },
    { id: 2, order: 30000 },
  ]);
};
