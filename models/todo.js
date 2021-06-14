const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    task_name: { 
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Tasks", taskSchema);