import React from 'react';
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva';
import { Logo, UserDashboard } from '../../components/Utils/Icons';
import DashboardOne from '../../components/userDashboard/DashboardOne';
import { useNavigate } from 'react-router-dom';
function UserDashboardP() {
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
    <DashboardOne/>
    </>

  )
}

export default UserDashboardP;
