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
    <div>
      this page is account Upgrate
    </div>
    </>
  )
}

export default AccountUpgrate;
