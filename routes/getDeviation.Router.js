const express = require('express'); // Import express module

const router = express.Router(); // Create a router instance

const {getDeviation} = require('../controllers/getDeviation'); // Import getDeviation function from controller

router.get("/deviation", getDeviation);         // Fetch standard deviation

module.exports = router;