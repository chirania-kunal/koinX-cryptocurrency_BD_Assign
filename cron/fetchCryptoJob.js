const cron = require("node-cron");
const { fetchAndSaveCryptoData } = require("../service/cryptoService");

// Schedule the job to run every 2 hours
cron.schedule("0 */2 * * *", async () => {
  console.log("Running scheduled crypto data fetch job...");
  try {
    await fetchAndSaveCryptoData();
  } catch (error) {
    console.error("Scheduled job failed:", error.message);
  }
});
