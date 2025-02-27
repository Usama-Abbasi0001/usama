import React from 'react'
import LeftBar from '../../components/NavBar/LeftBar.jsx';
import MiddleBar from '../../components/NavBar/MiddleBar.jsx';
import RightBar from '../../components/NavBar/RightBar.jsx';
import Contact from '../../components/contact/Contact.jsx';
function ContactComp() {
  return (
    <div>
      <div className='container  mx-auto flex justify-between rounded-b-[6px] py-4 items-center px-4 bg-gray-900'>
     <div><LeftBar/></div>
     <div><MiddleBar/></div>
     <div><RightBar/></div>
    </div>
    <Contact/>
    </div>
  )
}

export default ContactComp
