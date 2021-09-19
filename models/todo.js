const mongoose = require('mongoose')

const goalSchema = require('./subModels/goal').schema
const Alarm = require('./subModels/alarm').schema
const OnTime = require('./subModels/onTime').schema

const todoSchema = new mongoose.Schema( { 
	title: {
		type: String, 
		required: true
	}, 
	onDate: {
		// type: Date,
		type: String
		// ,default: Date.now()
		// ,required: true
	}
	// ,
	// alarm: Alarm,
	// goal: Goal,	
	// goal: goalSchema,		 
	// time: OnTime
})

module.exports = mongoose.model('Todo', todoSchema)