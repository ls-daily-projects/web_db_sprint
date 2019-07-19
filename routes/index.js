const { Router } = require("express")
const { BadRequest } = require("http-errors")

const {
    getProjectById,
    addProject,
    addActionToProject,
    getActionById
} = require("../model")

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
        if (error.errno === 19 || error.errno === 1)
            return next(BadRequest(error.message))
        next(error)
    }
})

apiRouter.post("/projects/:projectId/actions", async (req, res, next) => {
    try {
        const addedProject = await addActionToProject(
            req.body,
            req.params.projectId
        )
        res.json(addedProject)
    } catch (error) {
        if (error.errno === 19 || error.errno === 1)
            return next(BadRequest(error.message))
        next(error)
    }
})

apiRouter.get("/actions/:actionId", async (req, res, next) => {
    try {
        const action = await getActionById(req.params.actionId)
        res.json(action)
    } catch (error) {
        next(error)
    }
})

module.exports = apiRouter
