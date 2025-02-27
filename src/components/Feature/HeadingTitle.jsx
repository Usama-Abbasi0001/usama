import React from 'react'

function HeadingTitle() {
  return (
    <div className="max-w-[1190px] mx-auto px-4 text-center flex flex-col">
    {/* Title */}
    <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight">
      Financial markets, demystified
    </p>
  
    {/* Description */}
    <p className="opacity-70 max-w-[90%] md:max-w-[700px] lg:max-w-[1060px] mx-auto mt-5 text-base sm:text-lg md:text-xl">
      Choosing a trading account is always difficult, you need to get acquainted with all account types and choose the best one of them.
      At Wealthnest Global, we like to simplify everything for our beloved clients. An optimal trading account for all your needs.
    </p>
  </div>
  
  
  )
}

export default HeadingTitle
