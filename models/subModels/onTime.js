const mongoose = require('mongoose')

const onTimeSchema = new mongoose.Schema ({
	startsAt: {
		type: Date
	},
	endsAt: {
		type: Date
	}

})

module.exports = mongoose.model('OnTime', onTimeSchema)