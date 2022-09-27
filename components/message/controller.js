const addMessage = (user, message) => {
	//trabajaremos con promesas
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error('[messageController] no hay usuario o mensaje')
			reject('Los datos son incorrectos, desde promesa')
			return false
		}
		const fullMessage = {
			user: user,
			msg: message,
			date: new Date()
		}
		//console.log(fullMessage)
		resolve(fullMessage)
	})
}

module.exports = { addMessage }
