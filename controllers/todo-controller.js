const TaskSchema = require('../models/todo');

module.exports.addNewTask = (obj, callback) => {
    obj.save(callback);
}

module.exports.getTaskByTaskName = (task_name, callback) => {
    TaskSchema.findOne({task_name: task_name}, callback);
}

module.exports.getAllTasks = (callback) => {
    TaskSchema.find({}, callback);
}

module.exports.markTaskAsCompleted = (id, callback) => {
    console.log("COntroller:", id);
    TaskSchema.updateOne({_id: id}, {$set: {completed: true}}, callback);
}

module.exports.deleteTaskByName = (task_name, callback) => {
    TaskSchema.deleteOne({task_name: task_name}, callback)
}