const { createMany, createContext, createActionContext } = require("../utils")

exports.seed = knex =>
    knex("contexts")
        .insert(createMany(createContext))
        .then(() => {
            return knex("action_contexts").insert(
                createMany(createActionContext)
            )
        })
