import React, { useState } from 'react';
import minew from '../../components/images/lookmini2.png';
import { Eyes, Eyes2 } from '../Utils/Icons';

function DashboardOne() {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className='container bg-gray-900 rounded-[20px] p-4 mt-5 flex justify-between items-center'>
      <div>
        <div className='flex space-x-3 items-center'>
          <p className='font-bold'>Portfolio Balance</p>
          <div onClick={toggleBalance} className='cursor-pointer'>
            {showBalance ? <Eyes2 /> : <Eyes />}
          </div>
        </div>
        <p className='text-[20px] font-bold py-3'>{showBalance ? 'Rs0.00' : '******'}</p>
        <div className='flex space-x-2 items-center'>
          <p className='h-[10px] w-[10px] bg-green-700 rounded-[50px]'></p>
          <p className='text-[10px] text-green-700'>Total Withdraw-able Balance</p>
        </div>
      </div>
      <div>
        <img src={minew} alt='' className='w-[70px] h-[70px]' />
      </div>
    </div>
  );
}

export default DashboardOne;
