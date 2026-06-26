const express = require('express');
const router = express.Router();

let gratitudeList = [];

//get saved gratitude entries
router.get('/', (req, res) => {
  res.json(gratitudeList);
});

// record a new gratitude entry
router.post('/', (req, res) => {
  const newGratitude = {
    id: Date.now(),
    text: req.body.text
  };

  gratitudeList.push(newGratitude);
  res.status(201).json(newGratitude);
});

module.exports = router;