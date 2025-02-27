import React from 'react'
function Stories({ title, description, image1 , image2 }) {
  return (
    <>
    
     <div className='flex justify-between hover:bg-gray-600  px-2 py-2 rounded-[16px] mt-5'>
        <div className='flex flex-col'>
            <div className='flex space-x-4'>
                <img src={image1} alt="" className='rounded-[50px] w-[20px] h-[20px]' />
                <p className='opacity-50'>{title}</p>
            </div>
            <p className='mt-1'>{description}</p>
        </div>
        <div><img src={image2} alt="" className='w-[150px] rounded-[10px] h-[100px]'/></div>
    </div>
    <hr className='opacity-50 w-[1170px] mx-auto '/>
    </>
  )
}

export default Stories;
