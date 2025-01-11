const Crypto = require("../models/cryptoModel");

// Get the standard deviation of prices for the last 100 records
exports.getDeviation = async (req, res) => {
    const { coin } = req.body;

    try {

      const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);

      if (records.length < 2) {
        return res.status(400).json({ 
            error: "Not enough data points" 
        });
      }
      const prices = records.map(record => record.price);
      const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
      const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
      const stdDeviation = Math.sqrt(variance);
  
      res.json({ 
        deviation: stdDeviation.toFixed(2) 

      });
    } catch (error) {
      res.status(500).json({ 
            error: "Internal Server Error" 
        });
    }
};