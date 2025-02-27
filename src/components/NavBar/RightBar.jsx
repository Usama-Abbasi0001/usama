import React, { useState } from "react";
import './NavBar.css'
import { Cross, Menu, User } from "../Utils/Icons"; 
import logo from '../../components/images/logo.svg'
import { useNavigate } from "react-router-dom";

const RightBar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
function gotologin(){
  navigate('/login')
}
function gotomain(){
  navigate('/')
}
  return (
    <div   className="flex space-x-4 items-center">
    <div 
    id="User"
     className="w-[100px] bg-white  py-2  text-center lg:flex hidden space-x-3 justify-center cursor-pointer rounded-[50px]"
     onClick={gotologin}>
      <span className="text-black font-bold hover:text-white">login</span>
      <User/>
    </div>
      <button 
        id="Menu"
        onClick={() => setIsOpen(true)} 
        className="p-3 hover:bg-white text-white rounded-full z-50"
      >
        <Menu />
      </button>

     
      <div
        className={`fixed  inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

     
      <div id="OfCanva"
        className={`fixed  top-0 right-0 h-full w-[320px]  shadow-lg p-6 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" flex justify-end ">
        <button onClick={() => setIsOpen(false)} className="absolute ">
          <Cross />
        </button>
        </div>
      <div className="mt-10">
        <img src={logo} alt="" className="w-[200px]" onClick={gotomain}/>
        <hr  className='w-[200px] border-2 rounded-[50%] mt-6  border-green-500' />
        <p className="mt-5 text-[20px] font-bold">Office Address</p>
        <p className="opacity-70 mt-3">71-75 Shelton Street, Covent Garden,
        London, United Kingdom, WC2H 9JQ</p>
        <p className=" mt-5 text-[20px] font-bold">Phone Number</p>
        <p className="opacity-70 mt-3">+1 (301) 597-3811</p>
        <p className=" mt-5 text-[20px] font-bold">Email Address</p>
        <p className="opacity-70 mt-3">info@Wealthnest Global.online
        support@Wealthnest Global.online</p>
      </div>
       
      </div>
    </div>
  );
};

export default RightBar;
