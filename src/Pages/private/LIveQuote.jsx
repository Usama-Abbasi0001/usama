import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva';
import { Logo, UserDashboard } from '../../components/Utils/Icons';

function LIveQuote() {
  const [selectedStock, setSelectedStock] = useState('Apple');
  const stocks = ['Apple', 'Google', 'Microsoft', 'Meta', 'Netflix'];
  const navigate = useNavigate();

  function login() {
    navigate('/login');
  }

  return (
    <>
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center bg-gray-800 p-3">
        <div className="flex space-x-4 items-center">
          <UserLeftOffCanva />
          <Logo />
        </div>
        <div onClick={login}>
          <UserDashboard />
        </div>
      </div>

      {/* Main Stock Section */}
      <div className="bg-black text-white min-h-screen p-4 sm:p-6">
        <div className="max-w-screen-lg mx-auto w-full">

          {/* Header Inputs */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <div className="flex-1">
              <p className="text-center text-sm mb-1">Stock Ticker</p>
              <input
                type="text"
                placeholder="Select Type"
                className="w-full bg-zinc-900 text-white px-4 py-3 rounded-xl outline-none"
              />
            </div>
            <div className="flex-1">
              <p className="text-center text-sm mb-1">Amount</p>
              <input
                type="number"
                placeholder="Enter Amount"
                className="w-full bg-zinc-900 text-white px-4 py-3 rounded-xl outline-none"
              />
            </div>
          </div>

          {/* Stock Tabs */}
          <div className="flex flex-wrap gap-4 mb-6">
            {stocks.map((stock) => (
              <button
                key={stock}
                onClick={() => setSelectedStock(stock)}
                className={`px-4 py-2 rounded-full ${
                  selectedStock === stock ? 'bg-white text-black' : 'bg-transparent border border-white'
                }`}
              >
                {stock}
              </button>
            ))}
          </div>

          {/* Stock Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="apple"
              className="w-12 h-12"
            />
            <div>
              <p className="text-xl font-bold">{selectedStock} Inc</p>
            </div>
            <button className="ml-auto bg-zinc-800 px-3 py-1 rounded-full text-lg">-</button>
          </div>

          {/* Price Info */}
          <div className="mb-4">
            <p className="text-5xl font-bold">
              210.14 <span className="text-sm text-gray-300">USD</span>
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-white text-2xl">₮</span>
              <p className="text-green-400 font-bold">+0.41%</p>
              <span className="text-sm text-green-400">1 day</span>
            </div>
          </div>

          {/* Buy/Sell Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg w-full">
              BUY
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-bold text-lg w-full">
              SELL
            </button>
          </div>

          {/* Trades Box */}
          <div className="bg-zinc-900 rounded-xl p-6 text-center text-white">
            <p className="font-bold">NO OPEN TRADES</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default LIveQuote;
