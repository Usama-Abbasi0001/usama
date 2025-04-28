import React from "react";
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva'
import { useNavigate } from "react-router-dom";
import { Logo , UserDashboard } from "../../components/Utils/Icons";
const LiveTrading = () => {
  const navigate = useNavigate();
  function login(){
    navigate("/login")
  }
  return (
    <>
    <div className='w-full flex justify-between items-center bg-gray-800 p-3'>
      <div className='flex space-x-4 items-center'>
        <UserLeftOffCanva/>
        <Logo/>
      </div>
      <div className='' onClick={login}>
        <UserDashboard/>
      </div>
    </div>
    <div className="bg-black min-h-screen pt-[2rem] text-white p-6 flex flex-col items-center space-y-6">
      {/* Top Controls */}
      <div className="flex space-x-10 ">
        <div className="text-center">
          <p className="mb-2 text-sm">Amount</p>
          <button className="bg-gray-800 px-8 py-4 rounded-md">Select Type</button>
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm">Currency Pair</p>
          <button className="bg-gray-800 px-8 py-4 rounded-md">BTC/ETH</button>
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm">Lot Size</p>
          <button className="bg-gray-800 px-8 py-4 rounded-md">Lot Size</button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-900 rounded-lg overflow-hidden w-full max-w-2xl p-4">
        <div className="flex items-center space-x-2 mb-4">
          <button className="bg-gray-800 px-4 py-2 rounded-md">GBPUSD</button>
          <div className="flex space-x-2">
            <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">1m</button>
            <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">5m</button>
            <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">30m</button>
            <button className="bg-gray-700 px-2 py-1 text-xs rounded-md">1h</button>
          </div>
        </div>

        {/* Chart Area - You can embed TradingView widget here later */}
        <div className="bg-black h-72 rounded-md flex items-center justify-center">
          <p className="text-gray-500">[Chart Here]</p>
        </div>

        {/* Bottom Tabs */}
        <div className="flex justify-between text-xs mt-4">
          <div className="flex space-x-2">
            <button className="text-gray-400 hover:text-white">1D</button>
            <button className="text-gray-400 hover:text-white">5D</button>
            <button className="text-gray-400 hover:text-white">1M</button>
            <button className="text-gray-400 hover:text-white">3M</button>
            <button className="text-gray-400 hover:text-white">6M</button>
            <button className="text-gray-400 hover:text-white">YTD</button>
            <button className="text-gray-400 hover:text-white">1Y</button>
            <button className="text-gray-400 hover:text-white">5Y</button>
            <button className="text-gray-400 hover:text-white">All</button>
          </div>
          <p className="text-gray-400">06:09:47 UTC</p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex space-x-10">
        <div className="text-center">
          <p className="mb-2 text-sm">Entry Price</p>
          <button className="bg-gray-800 px-8 py-4 rounded-md">Entry Price</button>
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm">Stop Loss</p>
          <button className="bg-gray-800 px-8 py-4 rounded-md">Stop Loss</button>
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm">Take Profit</p>
          <button className="bg-gray-800 px-8 py-4 rounded-md">Take Profit</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LiveTrading;
