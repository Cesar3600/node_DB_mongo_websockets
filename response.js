exports.success = (req, res, message, status) => {
	res.status(status || 200).send({
		error: '',
		body: message
	})
}

exports.error = (req, res, message, status, detail) => {
	console.log(detail || 'Error Inesperado')
	res.status(status || 400).send({
		error: message,
		body: ''
	})
}
