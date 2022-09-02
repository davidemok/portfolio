const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path')

app.use(cors())
app.use(express.json())

app.use(express.static('client'))

const port = process.env.PORT || 4000

app.listen(port, console.log(`Bubberduck, we are a go at ${port}`))