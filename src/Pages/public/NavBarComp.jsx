import React from 'react'
import '../../components/NavBar/NavBar.css'
import LeftBar from '../../components/NavBar/LeftBar';
import MiddleBar from '../../components/NavBar/MiddleBar';
import RightBar from '../../components/NavBar/RightBar';
import HomeComp from '../public/HomeComp';
import FeatureComp from './FeatureComp';
function NavBarComp() {
  return (
    <>
    <div className='container fixed z-10 mx-auto flex justify-between rounded-b-[6px] py-4 items-center px-4 bg-gray-900'>
     <div><LeftBar/></div>
     <div><MiddleBar/></div>
     <div><RightBar/></div>
    </div>
    <HomeComp/>
    <FeatureComp/>
    </>
  )
}

export default NavBarComp;
