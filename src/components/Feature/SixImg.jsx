import React from 'react';
import '../NavBar/NavBar.css';
import zimg from '../images/z.svg';
import ccimg from '../images/cc.svg';
import oimg from '../images/o.svg';
import bimg from '../images/b.svg';
import cimg from '../images/c.svg';
import pimg from '../images/p.svg';
function SixImg() {
  return (
    <div className="md:mt-[5rem] mt-10">
    <hr className="mt-10 opacity-50" />
    <div className="flex lg:flex-nowrap flex-wrap lg:justify-center mx-auto md:justify-center justify-center space-x-8 pt-[4rem] w-full lg:w-[1100px] overflow-x-auto lg:overflow-y-auto pb-10 custom-scrollbar">
    
  {[zimg, ccimg, oimg, bimg, cimg, pimg].map((imgSrc, index) => (
    <div key={index} 
         className="transition-transform  duration-300 transform hover:scale-110 opacity-80 hover:opacity-100">
      <img src={imgSrc} alt="" className="w-[150px] h-auto" />
    </div>
  ))}
</div>
<hr className="mt-10 opacity-50" />
  </div>
  
  
  )
}

export default SixImg
