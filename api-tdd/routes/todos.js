const express = require('express');
const router = express.Router();
const createError = require("http-errors")

const todos = [
    { id: 1, name: "Learn TDD", completed: false },
    { id: 2, name: "Learn Node.js", completed: false },
    { id: 3, name: "Learn Express", completed: false },
];

// GET todos
router.get("/", function (req, res, next) {
    res.json(todos);
})

router.get("/:id", function (req, res, next) {
    const todo = todos.find(todo => todo.id === Number(req.params.id));

    if (!todo) {
        return next(createError(404, "Todo not found"))
    }

    res.json(todo);
})

router.post("/", function (req, res, next) {
    const { body } = req

    if (!body.name || typeof body.name !== "string") {
        return next(createError(422, "Invalid request body"))
    }
    const newTodo = {
        id: todos.length + 1,
        name: body.name,
        completed: false
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)
})

module.exports = router;