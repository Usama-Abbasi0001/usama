import React from 'react';
import UserLeftOffCanva from '../../components/userDashboard/UserLeftOffCanva';
import { Logo, UserDashboard } from '../../components/Utils/Icons';
function UserDashboardP() {
  return (
    <div className='w-full flex justify-between items-center bg-gray-800 p-3'>
      <div className='flex space-x-4 items-center'>
        <UserLeftOffCanva/>
        <Logo/>
      </div>
      <div className=''>
        <UserDashboard/>
      </div>
    </div>

  )
}

export default UserDashboardP;
