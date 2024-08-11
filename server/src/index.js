const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// all currencies
app.get('/getAllCurrencies', async (req, res) => {
  const nameURL = `https://openexchangerates.org/api/currencies.json?app_id=${process.env.OPEN_EXCHANGE_RATES_APP_ID}`;

  try {
    const namesResponse = await axios.get(nameURL);
    const names = namesResponse.data;

    return res.json(names);
  } catch (error) {
    console.log(error);
  }
});

// convert currency
app.get('/convert', async (req, res) => {
  const { date, sourceCurrency, targetCurrency, sourceAmount } = req.query;

  try {
    const dataURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=${process.env.OPEN_EXCHANGE_RATES_APP_ID}`;
    const dataResponse = await axios.get(dataURL);
    const rates = dataResponse.data.rates;

    //rates
    const sourceRate = rates[sourceCurrency];
    const targetRate = rates[targetCurrency];

    //conversion
    const targetAmount = (targetRate / sourceRate) * sourceAmount;

    return res.json(targetAmount.toFixed(2));
  } catch (error) {
    console.log(error);
  }
});

// listen to the port
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
