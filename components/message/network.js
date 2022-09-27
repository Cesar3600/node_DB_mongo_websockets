const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/', (req, res) => {
	console.log(req.headers)
	res.header({
		'custom-header': 'nuestro valor personalizado'
	})
	response.success(req, res, 'todo ok', 202)
})

router.post('/', (req, res) => {
	console.log(req.query)
	if (req.query.error == 'ok') {
		response.error(req, res, 'error simulado', 400, 'solo una simulacion')
	} else {
		response.success(req, res, 'lista de mensajes', 200)
	}
})

module.exports = router
