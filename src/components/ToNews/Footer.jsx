import React from 'react'
import '../NavBar/NavBar.css';
import { Telegram } from '../Utils/Icons';
function Footer() {
  return (
      
         <div id="footer" className="mt-10 bg-gray-900 text-white py-10 px-6 pt-[6rem]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Get In Touch Now</h2>
        <form className="mt-6 flex flex-col space-y-4 max-w-[600px] mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
                type="submit"
                id="sign"
                className=" md:w-[600px] w-full text-white  py-2 rounded-lg transition">
                    Send Massage
              </button>
        </form>
        <div className='flex flex-col lg:justify-end justify-center lg:items-end items-center mt-[5rem]'>
            <p className='lg:w-[300px] md:w-[400px] opacity-50'>Award-winning Products and Trading platforms Tap into the world's markets and explore endless trading opportunities with tight spreads and no commission.</p>
            <div className='flex mt-10'>
            <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
             <a href='#home' className='w-[100 flex justify-center items-center p-1' id='green'><Telegram/></a>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
