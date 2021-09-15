const mongoose = require('mongoose')

// const Goal = require('./subModels/goal')
const goalSchema = require('./subModels/goal')
// const {Goal} = require(__dirname + '/subModels/goal.js')
const Alarm = require('./subModels/alarm')
const OnTime = require('./subModels/onTime')

const todoSchema = new mongoose.Schema( { 
	title: {
		type: String, 
		required: true
	}, 
	onDate: {
		type: Date,
		default: Date.now(),
		required: true
	},
	alarm: Alarm,
	// goal: Goal,	
	goal: goalSchema,		 
	time: OnTime
})

module.exports = mongoose.model('Todo', todoSchema)