import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Logo, UserDashboard } from '../../components/Utils/Icons';
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva';

function TransactionPage() {
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
      the payment transaction here 
    </div>
    </>
  )
}

export default TransactionPage;
