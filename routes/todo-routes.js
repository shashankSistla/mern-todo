
/// create Task
/// Delete task
/// mark tasks as completed
/// get all tasks

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("Todo get route");
    res.json({success: true, msg: "Todo route"});
})

router.post('/',(req, res) =>{
    let name = req.body.name;
    console.log(req.body)
    console.log("Todo post route");
    res.json({success: true, msg: "Todo route posted!"});
});



module.exports = router;