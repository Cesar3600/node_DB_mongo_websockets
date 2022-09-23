const express = require('express')

const app = express()
const Router = express.Router()
const PORT = 4000
app.use(Router)

Router.get('/', (request, response) => {
	response.send('mensaje de accion!')
})

app.listen(PORT, () => {
	console.log(`working on!${PORT}`)
})
