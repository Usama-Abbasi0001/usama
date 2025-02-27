import React from 'react';
import '../NavBar/NavBar.css'
import circle from '../images/threecoin.png';
function SecondComp() {
  return (
    <div className='flex flex-col lg:justify-start justify-center lg:items-start items-center  md:mt-6 mt-10'>
      <img src={circle} alt="" />
      <div className='py-5 '>
      <p className='w-[350px] opacity-50 px-10'>Ethereum is a decentralized, open-source
      blockchain with smart contract</p>
      <div id='symbol' className='flex space-x-5 items-center mt-10 py-3 ps-10 rounded-s-[10px] w-[350px]'>
        <p className='w-[15px] h-[15px] bg-gray-600 rounded-s-[50px] font-bold p-4 flex justify-center items-center'>1</p>
        <p>Symbol: CIC</p>
      </div>
      <div id='symbol' className='flex space-x-5 items-center  py-3 ps-10 rounded-s-[10px] w-[350px]'>
        <p className='w-[15px] h-[15px] bg-gray-600 rounded-s-[50px] font-bold p-4 flex justify-center items-center'>2</p>
        <p>Initial Value : 1 ETH = 3177.38 CIC</p>
      </div>
      <div id='symbol' className='flex space-x-5 items-center py-3 ps-10 rounded-s-[10px] w-[350px]'>
        <p className='w-[15px] h-[15px] bg-gray-600 rounded-s-[50px] font-bold p-4 flex justify-center items-center'>3</p>
        <p>Type : ERC20</p>
      </div>
      </div>
    </div>
  )
}

export default SecondComp
