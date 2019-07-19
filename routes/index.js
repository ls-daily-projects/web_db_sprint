const { Router } = require("express")
const { BadRequest } = require("http-errors")

const { getProjectById, addProject } = require("../model")

const apiRouter = Router()

apiRouter.get("/projects/:projectId", async (req, res, next) => {
    try {
        const project = await getProjectById(req.params.projectId)
        res.json(project)
    } catch (error) {
        next(error)
    }
})

apiRouter.post("/projects", async (req, res, next) => {
    try {
        const addedProject = await addProject(req.body)
        res.json(addedProject)
    } catch (error) {
        if (error.errno === 19) return next(BadRequest(error.message))
        next(error)
    }
})

module.exports = apiRouter
