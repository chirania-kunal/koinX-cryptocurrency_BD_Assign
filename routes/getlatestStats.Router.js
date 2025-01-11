const express = require('express'); // Import express module

const router = express.Router(); // Create a router instance

const {getStats} = require('../controllers/getlatestStats'); // Import getStats function from controller

router.get("/stats", getStats);   // Fetch latest stats

module.exports = router;