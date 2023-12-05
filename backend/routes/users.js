const express = require('express');
const roomsDbQueries = require('../queries/user_query');
const router = express.Router();

// POST User | route to create user
router.post('/api/create-user', async (req, res) => {
  
  roomsDbQueries.setUserDbQueries(req.body)
  .then(response => {
    res.json({ response });
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
});

module.exports = router;
