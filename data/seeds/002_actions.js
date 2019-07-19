const { createMany, createAction } = require("../utils")

exports.seed = knex => knex("actions").insert(createMany(createAction))
