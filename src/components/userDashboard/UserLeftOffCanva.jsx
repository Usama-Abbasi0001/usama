import React from 'react';
import { useState } from 'react';
import { Cross, Offcanvas } from '../Utils/Icons';

function UserLeftOffCanva() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    
  return (
    <>
  <div>
    <button 
      onClick={toggleMenu} 
      className=" py-2"
    >
    <Offcanvas/>
    </button>

    <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>        
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={toggleMenu}>
          <Cross className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-4">
        <a href="#" className="block py-2 px-3 hover:bg-blue-600 rounded-lg">Home</a>
        <a href="#" className="block py-2 px-3 hover:bg-blue-600 rounded-lg">About</a>
        <a href="#" className="block py-2 px-3 hover:bg-blue-600 rounded-lg">Contact</a>
      </nav>
    </div>

    {isOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50" 
        onClick={toggleMenu}
      ></div>
    )}
  </div>
    </>
  )
}

export default UserLeftOffCanva;