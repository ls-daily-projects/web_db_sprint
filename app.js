const express = require("express")

const apiRouter = require("./routes")
const { handle404, handle500 } = require("./middleware")

const app = express()

app.use(express.json())

app.use("/api", apiRouter)

app.use(handle404)
app.use(handle500)

module.exports = app
