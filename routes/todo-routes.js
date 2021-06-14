/// create Task
/// Delete task
/// mark tasks as completed
/// get all tasks

const express = require("express");
const router = express.Router();

const TaskModel = require("../models/todo");
const Task = require("../controllers/todo-controller");

router.get("/", (req, res) => {
   Task.getAllTasks((err, tasks) =>{
       if(err) throw err;
       res.json({success: true, msg: "Todo get route", tasks: tasks});
   });
});

router.post("/", (req, res) => {
  const obj = TaskModel({
    task_name: req.body.task_name,
    date: new Date(),
    completed: false,
  });

  Task.getTaskByTaskName(obj.task_name, (err, task) => {
    if (err) throw err;
    if (task)
      return res.json({ success: false, msg: "Task name already exists" });
    Task.addNewTask(obj, (err, added) => {
      if (err) throw err;
      console.log(added);
      res.json({ success: true, msg: "Todo route posted!" });
    });
  });

  console.log(`Task named ${obj.task_name} created! `);
});

router.patch("/", (req, res) => {
  id = req.body._id;
  console.log("ID is", req.body.id);
  Task.markTaskAsCompleted(id, (err, updated) =>{
      if(err) throw err;
      res.json({success: true, msg: "Task completed"})
      console.log(updated);
  });
});

router.delete("/", (req, res) => {
  const task_name = req.body.task_name;
  Task.deleteTaskByName(task_name, (err, deleted) =>{
      if(err) throw err;
      res.json({success: true, msg: "Task deleted"});
      console.log(deleted);
  })
  
});

module.exports = router;
