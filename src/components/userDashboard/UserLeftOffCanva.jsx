import React, { useState } from "react";
import { motion } from "framer-motion";
import { Account, Copy, Cross,  Dash,  Deposit,  Email,  Kyc,  Live,  LiveChats,  LogOut,  Offcanvas, Quotes, Stock, Transaction, Withdrawal } from "../Utils/Icons";
import logo from '../../components/images/logo.svg';
import logopic from '../../components/images/my.jpg';
import { SlCalender } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
const UserLeftOffCanva = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCanvas = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  function logout(){
    navigate('/login')
  }

  return (
    <div>
      {/* Open Button */}
      <button
        onClick={toggleCanvas}>
          <Offcanvas/>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleCanvas}
        ></div>
      )}

      {/* OffCanvas Menu */}
      <motion.div
  initial={{ x: "-100%" }}
  animate={{ x: isOpen ? "0%" : "-100%" }}
  transition={{ duration: 0.3 }}
  className="fixed top-0 left-0 w-64 h-screen overflow-y-auto bg-black shadow-lg z-50 py-6 px-4"
>

        {/* Close Button */}
        <button onClick={toggleCanvas} className=" flex justify-between w-full items-center">
         <div><img src={logo} alt="" className="w-[140px]"/></div> 
          <Cross />
        </button>

        {/* Navigation Links */}
        <nav className="mt-10 space-y-3 w-58">
        <div className="bg-gray-600 p-2 rounded-[6px]">
          <div className="flex space-x-2 items-center">
          <div><img src={logopic} alt="" className="w-[50px] rounded-[50%]" /></div>
          <div className="  ">
            <p>Usama Khan</p>
            <p className="text-[12px]">usamaKhan58461@gmail.com</p>
          </div>
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-[14px]">LAST:</p>
            <p className="text-[12px]">Apr-3-2025</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[14px]">Access:</p>
            <p className="text-[12px]">Am</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-[14px]">Account Type:</p>
            <p className="text-[12px]">Basic</p>
          </div>
        </div>
          <Link to="/user"
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Dash />
          <p>Dashboard</p>
         </Link>
         <Link to="/kycverification"
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded">
             <Kyc />
            <p>Submit KYC</p>
           </Link>

         <Link to='/copy-experts'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Copy/>
          <p>Copy Experts</p>
         </Link>
         <Link to='/deposit-page'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Deposit/>
          <p>Deposit</p>
         </Link>
         <Link to='/withrawal'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Withdrawal/>
          <p>Withdrawal</p>
         </Link>
         <Link to='/account-upgrate'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Account/>
          <p>Account Upgrate</p>
         </Link>
         <Link to='/live-trading'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Live/>
          <p>Live Trading</p>
         </Link>
         <Link to='/live-quote'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Quotes/>
          <p>Live Quotes</p>
         </Link>
         <Link to='/live-chat'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <LiveChats/>
          <p>Live Chat</p>
         </Link>
         <Link to='/calender'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <SlCalender/>
          <p>Calender</p>
         </Link>
         <Link to='/transaction'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Transaction/>
          <p>Transactions</p>
         </Link>
         <Link to='/emailus'
           className="flex items-center space-x-3 text-[18px] text-white hover:bg-[#44a08d] hover:text-white transition duration-300 p-2 rounded"
          >
          <Email/>
          <p>Email Us</p>
         </Link>
         <a href="#"
           className="flex items-center space-x-3 text-[18px] text-red-600 hover:bg-[#3ab0995f] hover:text-white transition duration-300 p-2 rounded"
           onClick={logout}
          >
          <LogOut/>
          <p>Logout</p>
         </a>
        </nav>
      </motion.div>
    </div>
  );
};

export default UserLeftOffCanva;
