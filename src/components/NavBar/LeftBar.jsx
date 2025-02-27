import React from 'react'
import logo from '../../components/images/logo.svg'
import { useNavigate } from 'react-router-dom';
function LeftBar() {
  const navigate = useNavigate();
function gotomain(){
  navigate('/')
}
  return (
    <div className=''>
      <img src={logo} alt="" className='w-[170px]' onClick={gotomain}/>
    </div>
  )
}

export default LeftBar
