const { getProjectById } = require("./model")

const test = async () => {
    const project = await getProjectById(2)
    console.log(project)
}
test()
