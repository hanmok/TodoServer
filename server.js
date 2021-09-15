const express = require('express')
const bodyParser = require("body-parser") // is it really needed ?
const mongoose = require('mongoose')
const app = express()

const Habit = require('./models/habit') // . : look in the same folder 
const Todo = require('./models/todo')
const NegativeHabit = require('./models/negativeHabit')


mongoose.connect('mongodb://localhost:27017/noHabitDB')

mongoose.connection.once('open', () => {
	console.log('Connected to DB!')
}).on('error', (error) => {
	console.log('Failed to connect' + error)
})

app.use(bodyParser.urlencoded({ extended: true}))



app.route('/todos')
	// .get('/', async (req, res) => {
		.get(async (req, res) => {
		try { 
			const todos = await Todo.find()
			res.json(todos)
		} catch(err) { 
			res.status(500), json({message: err.message})
		}
		})
	// .post('/', async (req, res) => {
		.post( async (req, res) => {
		const todo = new Todo ({
			title: req.body.title, 
			onDate: req.body.onDate, 
		})
		try { 
			const newTodo = await todo.save()
			res.status(201).json(newTodo)
		} catch (err) { 
			res.status(400).json({message: err.message})
		}
	})
	app.route('/todos/:id')
	// .patch('/:id', getTodo, async (req, res) => {
		.patch(getTodo, async (req, res) => {
		if (req.body.title != null) { 
			res.todo.title = req.body.title
		}
		res.todo.onDate =  req.body.onDate 
	
		try { 
			const updatedTodo = await res.todo.save()
			res.json(updatedTodo)
		} catch (err) { 
			res.status(400).json({message: err.message})
		}
	})
	// .delete('/:id', getTodo, async (req, res) => {
		.delete(getTodo, async (req, res) => {
		try { 
			await res.todo.remove()
			res.json({ message: 'Deleted Todo'})
		} catch (err) { 
			res.status(500).json({message: err.message })
		}
	})

async function getTodo(req, res, next) { 
	let todo 
	try {
		todo = await Todo.findById(req.params.id)
		if (subscriber == null) { 
			return res.status(404).json({ message: "Cannot find todo"})
		}
	} catch (err) {
		return res.status(500).json({ message: err.message})
	}
	res.todo = todo
	next()
}





const server = app.listen(5000, () => console.log("Server Started"))