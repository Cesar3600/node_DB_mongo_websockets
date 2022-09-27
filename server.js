const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router(app)

app.use('/app', express.static('public'))

app.listen(5000, () => console.log(`working on port 5000!!`))
