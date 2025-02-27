import React from 'react';
import '../NavBar/NavBar.css'
import cards from '../images/cards.png';
import card1 from '../images/lookmini.png';
import card2 from '../images/lookmini2.png';
import steel from '../images/steel.jpg';
import steel2 from '../images/steel2.jpg';
function BannerCard() {
  return (
    <>
    <div className='flex flex-wrap lg:justify-between justify-center lg:space-x-0 md:space-x-10 py-[7rem] px-[1rem]'>
     <div id='Banner' className='lg:w-[370px] w-[300px] rounded-[16px] flex space-x-5 items-center p-5 hover-up'>
        <div><img src={cards} alt="" /></div>
        <p className='text-[20px] font-bold'>Swift Payment Methods</p>
    </div> 
    <div id='Banner' className='lg:w-[370px] w-[300px] rounded-[16px] flex md:mt-0 mt-[22px] space-x-5 items-center p-5 hover-up'>
        <div><img src={card1} alt="" /></div>
        <p className='text-[20px] font-bold'>Security & Control over money</p>
    </div> 
    <div id='Banner' className='lg:w-[370px] lg:mt-0 mt-[22px] w-[300px] rounded-[16px] flex space-x-5 items-center p-5 hover-up'>
        <div><img src={card2} alt="" /></div>
        <p className='text-[20px] font-bold'>Mobile Payment Make Easy</p>
    </div> 
    </div>
    <div className="text-center px-4">
  <p className="text-[40px] opacity-80 md:text-[50px] font-bold leading-snug">
    Smart Portfolios 
    <img src={steel} alt="" className="inline-block w-[100px] h-[50px] rounded-full mx-2" />
    Invest in the future you believe in with thematic investment <br /> strategies 
    <img src={steel2} alt="" className="inline-block w-[100px] h-[50px] rounded-full mx-2" />
    offering diversified exposure to the market segments that will shape our lives.
  </p>
</div>

    </>
  )
}

export default BannerCard
