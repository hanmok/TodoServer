const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema( { 
	goalDuration: {
		type: Number 
	}, 
	goalRep: { 
		type: Number
	}
})

module.exports = mongoose.model('Goal', goalSchema)