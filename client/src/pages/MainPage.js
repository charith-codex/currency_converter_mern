import React, { useState } from 'react';

const MainPage = () => {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);

  //handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      date,
      sourceCurrency,
      targetCurrency,
      sourceAmount,
    )
  };

  return (
    <div>
      <h1 className="lg:mx-32 text-5xl font-bold text-green-500">
        Currency Converter Plus
      </h1>
      <p className="lg:mx-32 opacity-40 py-6">
        Effortlessly convert currencies with real-time rates. Track multiple
        currencies, historical trends, and calculate conversions on-the-go. Stay
        updated with reliable data for seamless international transactions and
        travel planning.
      </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w1/2">
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label
                htmlFor={date}
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id={date}
                name={date}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder=""
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor={sourceCurrency}
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Source Currency
              </label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                id={sourceCurrency}
                name={sourceCurrency}
                value={sourceCurrency}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                <option selected>Choose source currency</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor={targetCurrency}
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Target Currency
              </label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                id={targetCurrency}
                name={targetCurrency}
                value={targetCurrency}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                <option selected>Choose target currency</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div class="mb-4">
              <label
                htmlFor={sourceAmount}
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount in source currency
              </label>
              <input
                onChange={(e) => setSourceAmount(e.target.value)}
                type="number"
                id={sourceAmount}
                name={sourceAmount}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Amount in source currency"
                required
              />
            </div>

            <button
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Get the target currency
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
