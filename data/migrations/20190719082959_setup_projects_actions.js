exports.up = knex =>
    knex.schema
        .createTable("projects", tableBuilder => {
            tableBuilder.increments()

            tableBuilder.string("name").notNullable()
            tableBuilder.text("description").notNullable()
            tableBuilder.boolean("isCompleted").defaultTo(false)
        })
        .createTable("actions", tableBuilder => {
            tableBuilder.increments()

            tableBuilder.text("description").notNullable()
            tableBuilder.text("notes").notNullable()
            tableBuilder.boolean("isCompleted").defaultTo(false)
            tableBuilder
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })

exports.down = knex =>
    knex.schema.dropTableIfExists("projects").dropTableIfExists("actions")
