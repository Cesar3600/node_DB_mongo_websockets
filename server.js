const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./network/routes')
const app = express()
const PORT = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
routes(app)

app.use('/app', express.static('public'))

app.listen(PORT, () => console.log(`working on port ${PORT}`))
