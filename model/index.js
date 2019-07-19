const db = require("../data")

const getProjectById = async projectId => {
    const projects = await db("projects")
        .where("id", projectId)
        .first()
    const actions = await db("actions")
        .columns(["id", "description", "notes", "isCompleted"])
        .where("project_id", projectId)
    projects.actions = actions
    return projects
}

const addProject = async projectData => {
    const [id] = await db("projects").insert(projectData)
    return getProjectById(id)
}

const addActionToProject = (actionData, projectId) => {}

module.exports = {
    getProjectById,
    addProject,
    addActionToProject
}
