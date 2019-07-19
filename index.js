const { getProjectById, addProject, addActionToProject } = require("./model")
const { createProject, createAction } = require("./data/utils")

const test1 = async projectId => {
    const project = await getProjectById(projectId)
    console.log(project)
}

const test2 = async () => {
    const newProject = createProject()
    console.log("New project\n", newProject)
    const addedProject = await addProject(newProject)
    console.log("Added Project\n", addedProject)
}

const test3 = async projectId => {
    const newAction = createAction()
    console.log("New action\n", newAction)

    const updatedProject = await addActionToProject(newAction, projectId)
    console.log("Updated Project\n", updatedProject)
}

test3(1)
