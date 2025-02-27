import React from 'react';
import bitcoin from '../../components/images/bitcoin.png';
import banner from '../../components/images/banner.png';
import { Chevron, Chevron2 } from '../Utils/Icons';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    function gotoregister(){
        navigate('./signup')
    }
    function gotologin(){
        navigate('./login')
    }
  return (
    <div>
        <div className='flex lg:justify-between justify-center lg:w-[1100px] mx-auto md:w-[660px] '>
        <div className='lg:flex hidden'><img src={bitcoin} alt="" /></div>
        <div>
            <p className='text-[20px] text-center mt-10 md:w-[580px]  w-[360px] font-bold'>Enjoy complete access to an ever expanding world of trading goods & assets according.</p>
            <div className='flex md:flex-row flex-col md:space-x-10 items-center justify-center mt-10'>

            <button onClick={gotologin} className="bg-white text-black hover:bg-black hover:text-white font-bold w-[200px] py-3 rounded-[40px] flex justify-center items-center space-x-3 group transition">
             <p>Login Account</p>
              <Chevron className="fill-black group-hover:fill-white transition-colors duration-300" />
             </button>

             <button onClick={gotoregister} className="bg-black text-white hover:bg-white hover:text-black font-bold w-[200px] md:mt-0 mt-5 py-3 rounded-[40px] flex justify-center items-center space-x-3 group transition">
             <p>Register Account</p>
              <Chevron2 className="fill-white group-hover:fill-black transition-colors duration-300" />
             </button>
            </div>
        </div>
        <div className='lg:flex hidden'><img src={banner} alt="" /></div>
      </div>
    </div>
  )
}

export default Banner
