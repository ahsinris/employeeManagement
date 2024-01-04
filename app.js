const express = require('express')

const app = express()

app.use(express.json())

const employee_router = require('./Router/employee router')

app.use(employee_router)

app.listen(8000)