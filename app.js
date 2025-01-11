// Importing required modules
const express = require("express");
const app = express();

// Importing database connection module
const dbConnect = require("./config/databaseConnection");

// Importing route modules
const fetchAndSaveCryptoData = require('./routes/fetchandsaveCrypto.Router');
const getDeviation = require('./routes/getDeviation.Router');
const getStats = require('./routes/getlatestStats.Router');

require("dotenv").config(); // Load environment variables


// Define port number
const PORT = process.env.PORT || 3000;


// Middleware for parsing JSON
app.use(express.json());

// Connect to the database
dbConnect();




// Default route
app.get("/", (req, res) => {
  res.send(`<h1>Backend Internship Assignment for KoinX !</h1>`);
});


// Define routes
app.use("/api/v1/koinx", fetchAndSaveCryptoData); // Route for fetching and Saving Crypto Data in database
app.use("/api/v1/koinx", getDeviation); // Route for returning standard deviation of the price of the requested cryptocurrency for the last 100 records
app.use("/api/v1/koinx", getStats); // Route for  returning the latest data about the requested cryptocurrency.



// Start the server
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});



//URL references for testing

// POST request to fetch cryptocurrency and creating a new entry saving it into the database after every 2 hours
// http://localhost:4000/api/v1/koinx/fetchdata

// GET request  for  fetching the latest data about the requested cryptocurrency.
// http://localhost:4000/api/v1/koinx/stats

// GET request for  for fetching standard deviation of the price of the requested cryptocurrency for the last 100 records.
// http://localhost:4000/api/v1/koinx/deviation