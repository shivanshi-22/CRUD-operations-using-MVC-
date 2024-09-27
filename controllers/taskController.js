const Task = require("../models/taskModel");

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to create task",
    });
  }
};

exports.getAllTask = async (req, res, next) => {
  try {
    const taskList = await Task.find();
    res.status(200).json({
      status: "success",
      count: taskList.length,
      data: {
        taskList,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get all task",
    });
  }
};

exports.getOneTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        taskList,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get task",
    });
  }
};
