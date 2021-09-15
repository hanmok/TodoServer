const express = require('express')
const Habit = require('../models/habit')
// const app = express()

const router = express.Router()


// app.route('/habits')
router
	.get('/', async (req, res) => {
		try { 
			const habits = await Habit.find()
			res.json(habits)
		} catch(err) { 
			res.status(500), json({message: err.message})
		}
		
		})
	.post('/', async (req, res) => {
		const habit = new Habit ({
			title: req.body.title, 
			color: req.body.color, 
			onDates: req.body.onDates, 
			alarm: req.body.alarm, 
			achievedDates: req.body.achievedDates, 
			startEndDates: req.body.startEndDates, 
			goal: req.body.goal, 
			time: req.body.time
		})
		try { 
			const newHabit = await habit.save()
			res.status(201).json(newHabit)
		} catch (err) { 
			res.status(400).json({message: err.message})
		}
	})
	.patch('/:id', getHabit, async (req, res) => {
		if (req.body.title != null) { 
			res.habit.title = req.body.title
		}
		res.habit.color =  req.body.color 
		res.habit.onDates =  req.body.onDates
		res.habit.alarm =  req.body.alarm
		res.habit.startEndDates =  req.body.startEndDates
		res.habit.goal =  req.body.goal
		res.habit.time =  req.body.time
		res.habit.color =  req.body.color
		
		try { 
			const updatedHabit = await res.habit.save()
			res.json(updatedHabit)
		} catch (err) { 
			res.status(400).json({message: err.message})
		}
	})
	.delete('/:id', getHabit, async (req, res) => {
		try { 
			await res.habit.remove()
			res.json({ message: 'Deleted Habit'})
		} catch (err) { 
			res.status(500).json({message: err.message })
		}
	})



async function getHabit(req, res, next) { 
	let habit 
	try {
		habit = await Habit.findById(req.params.id)
		if (subscriber == null) { 
			return res.status(404).json({ message: "Cannot find habit"})
		}
	} catch (err) {
		return res.status(500).json({ message: err.message})
	}
	res.habit = habit
	next()
}






// app.route("/habits/:habitId")
// 	.get(function(req, res) { 
// 		Habit.findOne({_id: req.get("id")}, function(err, foundNote) {
// 			if (foundNote) { 
// 				res.send(foundNote)
// 			} else { 
// 				res.send("No Habit matching that id found")
// 			}
// 		})
// 	})
// 	.put(function(req, res) { 
// 		Habit.update(
// 			{_id: req.get("id")},
// 			{title: req.get('title'),
// 			color: req.get('color'),
// 			onDates: req.get('onDates'),
// 			alarm: req.get('alarm'),
// 			startEndDates: req.get('startEndDates'),
// 			goal: req.get('goal'),
// 			time: req.get('time')
// 			},  // do I need 'content' here ? 
// 			{override: true},function(err) { 
// 				if (!err) { 
// 					res.send("Successfully updated.")
// 				}
// 			}
// 		)
// 	})
// 	.patch(function(req, res) {

// 	})





module.exports =  router
// specify which router which string later 
// in app.js file, 
// const habitRouter = require('./routes/habits)
// app.use('/habits', habitRouter)
// or do it all in server.js
// Factory ?? is it related to .. automation?