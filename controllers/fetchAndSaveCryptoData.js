const { fetchAndSaveCryptoData } = require("../service/cryptoService");

exports.fetchCryptoData = async (req, res) => {
  try {
    await fetchAndSaveCryptoData();
    res.status(200).json({
        message: "Cryptocurrency data fetched and saved successfully!"

    });

    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch cryptocurrency data", 
            details: error.message 

        });
    }
};