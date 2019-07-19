const { createMany, createProject } = require("../utils")

exports.seed = knex => knex("projects").insert(createMany(createProject))
