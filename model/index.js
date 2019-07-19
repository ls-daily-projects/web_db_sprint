const db = require("../data")

const getProjectById = async projectId => {
    const project = await db("projects")
        .where("id", projectId)
        .first()

    if (!project) throw Error("Invalid Project ID!")

    const actions = await db("actions")
        .columns(["id", "description", "notes", "isCompleted"])
        .where("project_id", projectId)
    project.actions = actions
    return project
}

const addProject = async projectData => {
    const [id] = await db("projects").insert(projectData)
    return getProjectById(id)
}

const addActionToProject = async (actionData, projectId) => {
    await getProjectById(projectId)

    actionData.project_id = Number(projectId)

    await db("actions").insert(actionData)

    return getProjectById(projectId)
}

const getActionById = async actionId => {
    const action = await db("actions")
        .where("id", actionId)
        .first()

    if (!action) throw Error("Invalid Action ID!")

    const contexts = await db("contexts")
        .columns(["name"])
        .innerJoin("action_contexts", "action_contexts.action_id", action.id)

    action.contexts = contexts
    return action
}

module.exports = {
    getProjectById,
    addProject,
    addActionToProject,
    getActionById
}
