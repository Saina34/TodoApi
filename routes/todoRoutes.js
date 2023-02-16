const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todosController");

// Create
router.post("/todos", todoController.addTodo);
// Read
router.get("/todos", todoController.getTodos);
// Update
// router.patch("/todos/:id", todoController.updateTodo);
// // Delete
// router.delete("/todos/:id", todoController.deleteTodo);

module.exports = router;
