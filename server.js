const express = require('express')
const bodyParser = require("body-parser") // is it really needed ?
const mongoose = require('mongoose')
const app = express()

// const Habit = require('./models/habit') // . : look in the same folder 
const Todo = require('./models/todo')
// const NegativeHabit = require('./models/negativeHabit')


mongoose.connect('mongodb://localhost:27017/noHabitDB')

mongoose.connection.once('open', () => {
	console.log('Connected to DB!')
}).on('error', (error) => {
	console.log('Failed to connect' + error)
})

app.use(bodyParser.urlencoded({ extended: true}))


app.route('/todos')

	.get( async (req, res) => {
		try { 
			const todos = await Todo.find()
			res.json(todos)
		} catch(err) { 
			res.status(500).json({message: err.message})
		}
	})
	.post( async (req, res) => {
		const todo = new Todo ({
			title: req.body.title, 
			onDate: req.body.onDate
		})
		try { 
			const newTodo = await todo.save()
			res.status(201).json(newTodo)
		} catch (err) { 
			res.status(400).json({message: err.message})
		}
	})
	.delete(function(req, res) {  // delete all 
		Todo.deleteMany(function(err) { 
			if (!err) { 
				res.send("Successfully deleted all the todos")
			} else { 
				res.send(err)
			}
		})
	})
	

app.route('/todos/:id')
	// works!
	.get(async (req, res) =>  {
		const todo = await Todo.findById({_id: req.params.id})
		res.json(todo)
	})
	// works !
	.patch( async (req, res) => { 
		try { 
			// const updatedTodo = await res.todo.save()
			const result = await Todo.updateOne({_id: req.params.id}, {$set: req.body})
			res.json(result)
		} catch (err) { 
			res.status(400).json({message: err.message})
		}
	})
	.delete((req, res) => { 
		Todo.findOneAndRemove({
			// _id: req.get("id")
			_id: req.params.id
		}, (error) => {
			console.log("Failed" + error)
		})
		res.send("Deleted!")
	})
	


	


	

async function getTodo(req, res, next) { 
	let todo 
	try {
		// todo = await Todo.findById(req.body.id)
		todo = await Todo.findById(req.params.id)
		if (todo == null) { 
			return res.status(404).json({ message: "Cannot find todo"})
		}
	} catch (err) {
		return res.status(500).json({ message: err.message})
	}
	res.todo = todo
	next()
}





const server = app.listen(5000, () => console.log("Server Started"))