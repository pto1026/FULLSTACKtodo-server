const express = require('express')
const router = express.Router()
const Todo = require('./models/todo')
const Author = require('./models/author')

// Crud operations for todos

router.get('/todos', async (req, res) => {
    const todos = await Todo.find({})
    res.send(todos)
})

router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id })
        res.send(todo)
    } catch {
        res.status(404).send({ error: "Todo does not exist." })
    }
})

router.post('/todos', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        status: req.body.status,
        priority: req.body.priority
    })
    await todo.save()
    res.send(todo)
})

router.patch('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id })

        if (req.body.title) {
            todo.title = req.body.title
        }
        if (req.body.description) {
            todo.description = req.body.description
        }
        if (req.body.author) {
            todo.author = req.body.author
        }
        if (req.body.status) {
            todo.status = req.body.status
        }
        if (req.body.priority) {
            todo.priority = req.body.priority
        }

        await todo.save()
        res.send(todo)
    } catch {
        res.status(404).send({ error: "Todo does not exist." })
    }
})

router.delete('/todos/:id', async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404).send({ error: "Todo does not exist." })
    }
})

// Crud operations for author

