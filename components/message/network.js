const express = require('express')
const router = express.Router()
const response = require('../../network/response')

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

module.exports = router
