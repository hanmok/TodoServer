// const mongoose = require('mongoose')
// const Goal = require('./subModels/goal')
// const AchievedDates = require('./subModels/achievedDates')
// const StartEndDates = require('./subModels/startEndDates')

// const negativeHabitSchema = new mongoose.Schema( { 
// 	title: {
// 		type: String, 
// 		required: true
// 	}, 
// 	color: {
// 		type: String, 
// 		required: true
// 	},
// 	onDates: {
// 		type: [Number],
// 		required: true
// 	},
// 	achievedDates: {
// 		type: AchievedDates,
// 		required: true
// 	}, 
// 	dates: {
// 		type: StartEndDates,
// 		required: true
// 	},
// 	goal: Goal,		 
// })

// module.exports = mongoose.model('NegativeHabit', negativeHabitSchema)