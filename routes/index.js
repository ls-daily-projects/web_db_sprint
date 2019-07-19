const { Router } = require("express")

const { getProjectById } = require("../model")

const apiRouter = Router()

apiRouter.get("/projects/:projectId", async (req, res, next) => {
    try {
        const project = await getProjectById(req.params.projectId)
        res.json(project)
    } catch (error) {
        next(error)
    }
})

module.exports = apiRouter
