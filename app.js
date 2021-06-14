const express = require('express');
const mongoose = require('mongoose');


const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Database connection
mongoose.connect('mongodb://localhost:27017/todo', mongoOptions, (err, db) => { //use todo
    if(err) throw err;
    console.log("Successfully connected to database");
    console.log(db);
}) 

const app = express();
app.use(express.json());
const port = 3000;

const todo = require('./routes/todo-routes');
app.use('/todo', todo)

app.get('/', (request, response) => {
    console.log("Base route hit!");
    response.json({success: true, msg: "Base route HIT!"});
})

app.listen(port, () => {
    console.log(`Server started on Port: ${port}`);
}) 

