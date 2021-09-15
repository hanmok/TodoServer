// const mongoose = require('mongoose')
// const Goal = require('./subModels/goal')
// const Alarm = require('./subModels/alarm')
// const AchievedDates = require('./subModels/achievedDates')
// const StartEndDates = require('./subModels/startEndDates')
// const OnTime = require('./subModels/onTime')


// const habitSchema = new mongoose.Schema( { 
// 	title: {
// 		type: String, 
// 		required: true
// 	}, 
// 	color: {
// 		type: String, 
// 		required: true
// 	},
// 	onDates: {
// 		type: Number,
// 		required: true
// 	},
// 	alarm: Alarm,
// 	achievedDates: {
// 		type: AchievedDates,
// 		required: true
// 	}, 
// 	startEndDates: {
// 		type: StartEndDates,
// 		required: true
// 	},
// 	goal: Goal,		 
// 	time: OnTime
// })

// module.exports = mongoose.model('Habit', habitSchema)