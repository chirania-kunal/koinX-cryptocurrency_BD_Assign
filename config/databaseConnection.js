const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () =>  {
    // Connecting to the database using the provided URL from the environment variables
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        // If the connection is successful, log a success message
        .then(() => console.log("DB CONNECTION SUCCESS"))
        // If there are issues connecting to the database, log an error message and exit the process
        .catch((error) => {
            console.log(`DB CONNECTION ISSUES`);
            console.error(error.message);
            process.exit(1);
        });
};

module.exports = dbConnect;
