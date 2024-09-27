const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskTitle: {
    type: String,
    required: [true, "Task title is required"],
  },
  taskDesc: {
    type: String,
    required: [true, "Task description is required"],
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
