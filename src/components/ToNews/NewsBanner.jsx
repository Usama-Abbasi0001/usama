import React from 'react'
import '../NavBar/NavBar.css';
function NewsBanner() {
  return (
    <div>
       <div id='Home' className='h-[400px] lg:w-[1200px]  md:w-[700px] w-full mx-auto'>
              <div className='text-center flex justify-center items-end pt-32 space-x-6 '>
              <p className='font-bold cursor-pointer text-[50px] opacity-50' >Meet the Brick Veneers</p>
              </div> 
              </div>
    </div>
  )
}

export default NewsBanner
