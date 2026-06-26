const express = require('express');
const router = express.Router();

let tasksList = [];

// Sends task list to React
router.get('/', (req, res) => {
  res.json(tasksList);
});

// gets a new task from React and saves it
router.post('/', (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    type: req.body.type
  };
  
  tasksList.push(newTask);
  res.status(201).json(newTask); 
});


module.exports = router;