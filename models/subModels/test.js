const mongoose = require('mongoose')

const testSchema = new mongoose.Schema( { 
	testDuration: {
		type: Number 
	}, 
	testRep: { 
		type: Number
	}
})

module.exports = mongoose.model('Test', testSchema)