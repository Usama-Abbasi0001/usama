import React, { useState } from 'react';

const depositOptions = [
  {
    name: 'Bank Deposit',
    subtext: 'Wire Transfer',
    icon: '🏦',
    type: 'bank',
  },
  {
    name: 'BTC',
    subtext: 'Bitcoin',
    icon: '₿',
    type: 'btc',
  },
  {
    name: 'USDT',
    subtext: 'Tether USDT',
    icon: '🪙',
    type: 'usdt',
  },
  {
    name: 'ETH',
    subtext: 'Ethereum',
    icon: '💠',
    type: 'eth',
  },
  {
    name: 'BCH',
    subtext: 'Bitcoin Cash',
    icon: '💵',
    type: 'bch',
  },
];

const DepositPage = () => {
  const [search, setSearch] = useState('');

  const filteredOptions = depositOptions.filter((option) =>
    option.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Deposit</h1>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">Choose method of payment</p>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="space-y-4">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-900 rounded-2xl shadow hover:bg-gray-800 transition"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="text-3xl bg-white text-black w-12 h-12 rounded-full flex items-center justify-center">
                  {option.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{option.name}</h3>
                  <p className="text-gray-400 text-sm">{option.subtext}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-lg w-full sm:w-auto">
                  Deposit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
