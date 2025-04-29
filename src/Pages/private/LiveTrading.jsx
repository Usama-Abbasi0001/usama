import React from "react";
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva';
import { useNavigate } from "react-router-dom";
import { Logo , UserDashboard } from "../../components/Utils/Icons";

const LiveTrading = () => {
  const navigate = useNavigate();

  function login(){
    navigate("/login");
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

      {/* Main Content */}
      <div className="bg-black min-h-screen pt-8 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto flex flex-col space-y-8 items-center">

          {/* Top Controls */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 w-full justify-center">
            <div className="text-center w-full md:w-auto">
              <p className="mb-2 text-sm">Amount</p>
              <button className="bg-gray-800 px-8 py-4 rounded-md w-full">Select Type</button>
            </div>
            <div className="text-center w-full md:w-auto">
              <p className="mb-2 text-sm">Currency Pair</p>
              <button className="bg-gray-800 px-8 py-4 rounded-md w-full">BTC/ETH</button>
            </div>
            <div className="text-center w-full md:w-auto">
              <p className="mb-2 text-sm">Lot Size</p>
              <button className="bg-gray-800 px-8 py-4 rounded-md w-full">Lot Size</button>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-gray-900 rounded-lg overflow-hidden w-full p-4">
            {/* Chart Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
              <button className="bg-gray-800 px-4 py-2 rounded-md w-full sm:w-auto">GBPUSD</button>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">1m</button>
                <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">5m</button>
                <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">30m</button>
                <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">1h</button>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-black h-72 rounded-md flex items-center justify-center">
              <p className="text-gray-500">[Chart Here]</p>
            </div>

            {/* Bottom Tabs */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-4 text-xs space-y-2 sm:space-y-0">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {['1D','5D','1M','3M','6M','YTD','1Y','5Y','All'].map(label => (
                  <button key={label} className="text-gray-400 hover:text-white">{label}</button>
                ))}
              </div>
              <p className="text-gray-400">06:09:47 UTC</p>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 w-full justify-center">
            <div className="text-center w-full md:w-auto">
              <p className="mb-2 text-sm">Entry Price</p>
              <button className="bg-gray-800 px-8 py-4 rounded-md w-full">Entry Price</button>
            </div>
            <div className="text-center w-full md:w-auto">
              <p className="mb-2 text-sm">Stop Loss</p>
              <button className="bg-gray-800 px-8 py-4 rounded-md w-full">Stop Loss</button>
            </div>
            <div className="text-center w-full md:w-auto">
              <p className="mb-2 text-sm">Take Profit</p>
              <button className="bg-gray-800 px-8 py-4 rounded-md w-full">Take Profit</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LiveTrading;
