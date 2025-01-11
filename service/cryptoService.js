const Crypto = require("../models/cryptoModel");
const axios = require("axios");

exports.fetchAndSaveCryptoData = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
      params: {
        ids: "bitcoin,matic-network,ethereum",
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
      },
    });

    const data = response.data;
    const coins = Object.keys(data);

    for (const coin of coins) {
      const record = new Crypto({
        coin,
        price: data[coin].usd,
        marketCap: data[coin].usd_market_cap,
        change24h: data[coin].usd_24h_change,
      });

      await record.save();
    }

    res.json({
        success: true,
        message : "Cryptocurrency data fetched and saved successfully!",
    })
    
  } catch (error) {
    console.error("Error fetching or saving crypto data:", error.message);
    res.status(400).json({
        success : false,
        message : "Something went wrong",
    });

  }
};
