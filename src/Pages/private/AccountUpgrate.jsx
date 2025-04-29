import React from 'react'
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva';
import { Logo, UserDashboard } from '../../components/Utils/Icons';
import { useNavigate } from 'react-router-dom';

function AccountUpgrate() {
  const navigate = useNavigate();
  function login(){
    navigate("/login")
  }
  return (
    <>
     <div className='w-full flex justify-between items-center bg-gray-800 p-3'>
      <div className='flex space-x-4 items-center'>
        <UserLeftOffCanva/>
        <Logo/>
      </div>
      <div className='' onClick={login}>
        <UserDashboard/>
      </div>
    </div>
    <div className="w-full max-w-[600px] flex flex-col mt-10 mx-auto px-4">
  <div className="flex justify-start flex-col">
    <p className="text-2xl md:text-[30px] font-bold opacity-70" style={{color:'#00800'}}>Subscribe</p>
    <p className="opacity-80">Select Plans</p>
  </div>
  <div className="text-center flex items-center justify-center flex-col ">
    <p className="opacity-40 w-full md:w-[500px] mt-5">
      Your account has not been fully activated yet, which is why no subscription plans are currently available. We kindly recommend that you reach out to our support team for assistance. They will be able to verify your account status and help resolve any issues you may be encountering.
    </p>
    <p className="opacity-40 mt-5">Thank you for your understanding and cooperation.</p>
  </div>
</div>

    </>
  )
}

export default AccountUpgrate;
