const knex = require("knex");
const config = require("../../knexfile.js");
const db = knex(config.development);

module.exports = {
  find,
};

function find() {
  return db("fares");
}
