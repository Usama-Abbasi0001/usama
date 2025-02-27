import React from 'react'
import { useState } from "react";
import '../NavBar/NavBar.css';
import InvestmentChart from './InvestmentChart';
function FirstComp() {
    const [activeTab, setActiveTab] = useState("funding");
  return (
    <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center'>
      <div><InvestmentChart/></div>
      <div className="bg-gray-800 mt-7 md:rounded-[50px] rounded-[30px] py-3 md:w-[450px] w-[350px] flex md:flex-row flex-col space-x-5 justify-center items-center md:me-0 me-7">
      <button
        className={`w-[200px] md:py-2 px-5 rounded-[50px] font-bold transition-all duration-300 ${
          activeTab === "funding" ? "bg-white text-black" : "bg-transparent text-white"
        }`}
        onClick={() => setActiveTab("funding")}
      >
        Funding Allocation
      </button>

      <button
        className={`w-[200px] md:py-2 px-5 rounded-[50px] md:mt-0 mt-5 font-bold transition-all duration-300 ${
          activeTab === "token" ? "bg-white text-black" : "bg-transparent text-white"
        }`}
        onClick={() => setActiveTab("token")}
      >
        Token Distribution
      </button>
    </div>
    <div className='flex md:flex-row flex-col md:justify-center justify-start items-start md:space-x-16 md:space-y-0 space-y-3 mt-10'>
        <div className='flex flex-col'>
            <div className='flex items-center space-x-4'>
            <p id='green' className='w-[10px] h-[10px] bg-gray-600 rounded-[50px] font-bold p-3 flex justify-center items-center'></p>
            <p>Contingency: 70%</p>
            </div>
            <div className='flex items-center space-x-4 mt-3'>
            <p id='green1' className='w-[10px] h-[10px] bg-gray-600 rounded-[50px] font-bold p-3 flex justify-center items-center'></p>
            <p>Investor: 30%</p>
            </div>
            <div className='flex items-center space-x-4 mt-3'>
            <p id='green2' className='w-[10px] h-[10px] bg-gray-600 rounded-[50px] font-bold p-3 flex justify-center items-center'></p>
            <p>Legal & Regulation: 20%</p>
            </div>
        </div>
        <div className='flex flex-col'>
        <div className='flex items-center space-x-4 '>
            <p id='green3' className='w-[10px] h-[10px] bg-gray-600 rounded-[50px] font-bold p-3 flex justify-center items-center'></p>
            <p>Business Development: 20%</p>
            </div>
            <div className='flex items-center space-x-4 mt-3'>
            <p id='green4' className='w-[10px] h-[10px] bg-gray-600 rounded-[50px] font-bold p-3 flex justify-center items-center'></p>
            <p>Poland: 15%</p>
            </div>
            <div className='flex items-center space-x-4 mt-3'>
            <p id='green5' className='w-[10px] h-[10px] bg-gray-600 rounded-[50px] font-bold p-3 flex justify-center items-center'></p>
            <p>Czech Republic: 50%</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FirstComp
