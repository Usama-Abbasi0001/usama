import React from "react";
import "../NavBar/NavBar.css";
import { Apple, Store } from "../Utils/Icons";

function MobText() {
  return (
    <div className=" text-start px-4 md:px-6 lg:px-8">
      <h1 className="text-[36px] md:text-[42px] lg:text-[50px] font-bold opacity-70">
        Metatrader 5
      </h1>
      <p className="w-full md:w-[550px] opacity-50 text-[14px] md:text-[16px]">
        Online trading with Forex & Stock quotes, charts, technical analysis and
        news. Forex & Stock brokers offer traders investing in shares and currency
        trading via MetaTrader 5. Your MT5 features real-time quotes, financial
        news, FX & stock charts, technical analysis, and online trading. Free demo
        accounts are available.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
        <div className="flex space-x-5 items-center py-2">
          <p className="w-[40px] h-[40px] bg-gray-600 text-white rounded-full font-bold flex justify-center items-center">
            1
          </p>
          <p className="text-[16px]">White Paper</p>
        </div>
        <div className="flex space-x-5 items-center py-2">
          <p className="w-[40px] h-[40px] bg-gray-600 text-white rounded-full font-bold flex justify-center items-center">
            2
          </p>
          <p className="text-[16px]">Privacy & Policy</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
        <a
          href="https://apps.apple.com/ng/app/metatrader-5/id413251709"
          className="flex border bg-black w-full md:w-[240px] justify-center items-center space-x-4 py-2 rounded-[10px] text-white"
        >
          <Apple />
          <div>
            <p>Download on the</p>
            <span className="font-bold text-[18px]">App Store</span>
          </div>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&pli=1"
          className="flex border bg-black w-full md:w-[240px] justify-center items-center space-x-4 py-2 rounded-[10px] text-white"
        >
          <Store />
          <div>
            <p>Download on the</p>
            <span className="font-bold text-[18px]">Play Store</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MobText;
