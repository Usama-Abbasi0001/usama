import React from 'react'
import '../NavBar/NavBar.css'
function Working() {
  return (
    <div>
       <div className="w-full px-4 mt-[6rem] flex justify-center">
  <div className="max-w-[1260px] flex flex-col justify-center items-center text-center">
    {/* Title Section */}
    <div className="flex flex-wrap justify-center items-center space-x-3">
      <p id="Rigerte1"></p>
      <h1 className="text-lg md:text-xl font-semibold">Trusted for more than 7 years</h1>
      <p id="Rigerte2"></p>
    </div>

    {/* Description Section */}
    <p className="opacity-60 mt-2 max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px]">
      Wealthnest Global operates as an international digital investment management platform. Our Company offers access to multiple, automated, algorithm-driven financial services, investment solutions, diversified alternative investments, portfolio management, financial planning, and advisory services.
    </p>

    <p className="opacity-60 mt-6 max-w-[90%] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px]">
      Wealthnest Global began as an early investor in today’s most recognizable alternative investment funds, creating and managing several investment funds catering to offshore high-net-worth investors. Sovereign pioneered the distinctive vision to create an institutional solution to not only navigate, but also facilitate and simplify, the alternative investment journey.
    </p>
  </div>
</div>

    </div>
  )
}

export default Working
