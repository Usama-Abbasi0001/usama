import React from 'react'
import '../NavBar/NavBar.css';
import { useNavigate } from 'react-router-dom';
import {  Chevron2 } from '../Utils/Icons';
function Contact() {
    const naviagate = useNavigate();
    function gotomain(){
        naviagate('/')
    }
  return (
    <>
     <div className='contact h-[400px] lg:w-[1200px] md:w-[700px] w-full mx-auto'>
        <div className='text-center flex justify-center items-end pt-32 space-x-6 '>
        <a href="#Home"
         onClick={gotomain}
         className='hover:underline font-bold hover:text-red-600 flex  items-center'
         >HOME <span className='ps-4'><Chevron2/></span></a>
        <p className='font-bold cursor-pointer'>CONTACT US</p>
        </div> 
        </div>
    </>
  )
}

export default Contact

