import React from 'react'
import '../../components/NavBar/NavBar.css';
import Title from '../../components/Home/Title'
import Banner from '../../components/Home/Banner'
;
function HomeComp() {
  return (
    <div id='Home' className='lg:w-[1200px] md:w-[700px] lg:h-[550px] md:h-[600px] h-[600px] top-[7rem] relative'>
  <Title />
  <Banner />
</div>

  
  )
}

export default HomeComp
