exports.up = knex =>
    knex.schema
        .createTable("contexts", tableBuilder => {
            tableBuilder.increments()

            tableBuilder.string("name").notNullable()
        })
        .createTable("action_contexts", tableBuilder => {
            tableBuilder
                .integer("action_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("actions")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tableBuilder
                .integer("context_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("contexts")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })

exports.down = knex =>
    knex.schema
        .dropTableIfExists("contexts")
        .dropTableIfExists("action_contexts")
