import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  //handle submit method
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5000/convert', {
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          sourceAmount,
        },
      });
      setTargetAmount(response.data);
      setLoading(false);
      console.log(sourceAmount, targetAmount);
    } catch (error) {
      console.log(error);
    }
  };

  //get all the currencies
  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/getAllCurrencies'
        );
        setCurrencies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrencies();
  }, []);

  return (
    <>
      <div>
        <div className="lg:mx-32 text-center">
          <h1 className="text-5xl font-bold text-cyan-500">
            Currency Converter Plus
          </h1>
          <p className="opacity-40 py-6">
            Effortlessly convert currencies with real-time rates. Track multiple
            currencies, historical trends, and calculate conversions on-the-go.
            Stay updated with reliable data for seamless international
            transactions and travel planning.
          </p>
        </div>
        <div className="lg:mx-32 mt-3 flex items-center justify-center flex-col">
          <section className="w-full lg:w1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor={date}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  id={date}
                  name={date}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={sourceCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Source Currency
                </label>
                <select
                  onChange={(e) => setSourceCurrency(e.target.value)}
                  id={sourceCurrency}
                  name={sourceCurrency}
                  value={sourceCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                >
                  <option>Choose source currency</option>
                  {Object.keys(currencies).map((currency) => (
                    <option className="p-1" key={currency} value={currency}>
                      {currencies[currency]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor={targetCurrency}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Target Currency
                </label>
                <select
                  onChange={(e) => setTargetCurrency(e.target.value)}
                  id={targetCurrency}
                  name={targetCurrency}
                  value={targetCurrency}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                >
                  <option>Choose target currency</option>
                  {Object.keys(currencies).map((currency) => (
                    <option className="p-1" key={currency} value={currency}>
                      {currencies[currency]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor={sourceAmount}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Amount in source currency
                </label>
                <input
                  onChange={(e) => setSourceAmount(e.target.value)}
                  type="number"
                  id={sourceAmount}
                  name={sourceAmount}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  placeholder="Amount in source currency"
                  required
                />
              </div>

              <button className="mt-2 text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Get target currency
              </button>
            </form>
          </section>
        </div>

        {!loading ? (
          <div className="mt-7 flex items-center justify-center flex-col">
            <h2 className="text-2xl font-bold text-cyan-500">
              Amount in {currencies[targetCurrency]}
            </h2>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {targetAmount}
            </p>
          </div>
        ) : null}
      </div>
      <footer class="mt-10">
        <div class="w-full max-w-screen-xl mx-auto md:py-4">
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="text-center block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' - '} All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default MainPage;
