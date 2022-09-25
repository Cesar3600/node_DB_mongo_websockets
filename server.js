const response = require('./response')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const PORT = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

router.get('/', (req, res) => {
	console.log(req.headers)
	res.header({
		'custom-header': 'nuestro valor personalizado'
	})
	if (req.query.error == 'ok') {
		response.error(req, res, 'error simulado', 400)
	} else {
		response.success(req, res, 'lista de mensajes', 200)
	}
})

router.post('/', (req, res) => {
	console.log(req.query)
	console.log(req.body)
	response.error(
		req,
		res,
		'error inesperado',
		401,
		'no se puede dar autorizacion no se ha implementado el modulo de ingreso'
	)
})

app.use('/app', express.static('public'))

app.listen(PORT, () => console.log(`working on port ${PORT}`))
