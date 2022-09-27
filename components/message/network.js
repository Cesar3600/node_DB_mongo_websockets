const express = require('express')
const router = express.Router()
const response = require('../../network/response')

//trayendo el controlador
const controller = require('./controller')

router.get('/', (req, res) => {
	console.log(req.headers)
	res.header({
		'custom-header': 'nuestro valor personalizado'
	})
	response.success(req, res, 'todo ok', 202)
})

router.post('/', (req, res) => {
	controller
		.addMessage(req.body.user, req.body.message)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201)
			console.log(fullMessage)
		})
		.catch((e) => {
			response.error(req, res, e, 400, 'error en el controlador')
		})

	/* 	if (req.query.error == 'ok') {
		response.success(req, res, 'creado correctamente', 201)
	} else {
		response.error(req, res, 'error simulado', 400, 'solo una simulacion')
	} */
})

module.exports = router
