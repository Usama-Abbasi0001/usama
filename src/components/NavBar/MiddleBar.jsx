import React from 'react'
import { useNavigate } from 'react-router-dom'

function MiddleBar() {
  const navigate = useNavigate();
  function gotocontact(){
    navigate('/contact')
  }
  return (
    <div>
   <ul className="lg:flex hidden  space-x-7 text-lg font-semibold border py-4 px-6 rounded-[30px] 
           backdrop-blur-lg bg-gray-800 border-transparent shadow-lg shadow-black">
   <li className="relative cursor-pointer group">
  <a href="#Home" className="text-white"> HOME </a>
  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</li>


  <li className="relative cursor-pointer group">
    <a href="#Feature" className="text-white">FEATURE</a>
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </li>
  <li className="relative cursor-pointer group">
    <a href="#chart" className="text-white">CHART</a>
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </li>
  <li className="relative cursor-pointer group">
    <a href="#TopNews" className="text-white">TOP NEWS</a>
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </li>
  <li className="relative cursor-pointer group">
    <a  onClick={gotocontact} className="text-white">CONTACT</a>
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </li>
</ul>
    </div>
  )
}

export default MiddleBar
