import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cross,  Dash,  Offcanvas } from "../Utils/Icons";
import logo from '../../components/images/logo.svg'
const UserLeftOffCanva = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCanvas = () => setIsOpen(!isOpen);

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
        className="fixed top-0 left-0 w-64 h-full bg-black shadow-lg border z-50 py-6 px-4"
      >
        {/* Close Button */}
        <button onClick={toggleCanvas} className=" flex justify-between w-full items-center">
         <div><img src={logo} alt="" className="w-[140px]"/></div> 
          <Cross />
        </button>

        {/* Navigation Links */}
        <nav className="mt-10 space-y-4">
          <a href="#" className="flex items-center space-x-3 text-lg text-white hover:text-blue-500">
            <Dash/>
            <p>Dashboard</p>
          </a>
          <a href="#" className="block text-lg text-white hover:text-blue-500">
            About
          </a>
          <a href="#" className="block text-lg text-white hover:text-blue-500">
            Services
          </a>
          <a href="#" className="block text-lg text-white hover:text-blue-500">
            Contact
          </a>
        </nav>
      </motion.div>
    </div>
  );
};

export default UserLeftOffCanva;
