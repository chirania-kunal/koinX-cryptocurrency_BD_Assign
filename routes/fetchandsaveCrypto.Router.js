const express = require('express'); // Import express module

const router = express.Router(); // Create a router instance

const {fetchCryptoData} = require('../controllers/fetchAndSaveCryptoData'); // Import fetchAndSaveCryptoData function from controller


router.post("/fetchdata", fetchCryptoData);  // Manual trigger automatically after every 2hours

module.exports = router;