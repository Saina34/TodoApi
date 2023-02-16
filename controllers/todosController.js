const mongoose = require("mongoose");
const Todo = require("../models/todos");

exports.addTodo = async (req, res) => {
  console.log(req.body, "__SAINA BABY");
  const todo = await Todo.create({ title: req.body.title });
  res.json(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};
