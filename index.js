const { getProjectById, addProject } = require("./model")
const { createProject } = require("./data/utils")

const test1 = async () => {
    const project = await getProjectById(2)
    console.log(project)
}

const test2 = async () => {
    const newProject = createProject()
    console.log("New project\n", newProject)
    const addedProject = await addProject(newProject)
    console.log("Added Project\n", addedProject)
}
test2()
