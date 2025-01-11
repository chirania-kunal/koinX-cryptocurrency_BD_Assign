const Crypto = require("../models/cryptoModel");

// Get the latest stats for a cryptocurrency
exports.getStats = async (req, res) => {

  const { coin } = req.body;

  try {

    const latestRecord = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    
    if (!latestRecord) {
        return res.status(404).json({
             error: "Data not found" 
        })
    };

    res.json({
      price: latestRecord.price,
      marketCap: latestRecord.marketCap,
      "24hChange": latestRecord.change24h,
    });

  } catch (error) {
    res.status(500).json({ 
        error: "Internal Server Error"
    });
  }
};

