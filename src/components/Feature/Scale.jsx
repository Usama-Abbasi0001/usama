import React from 'react';
import '../../components/NavBar/NavBar.css'
import rocket from '../images/rocket.png';
import wallet from '../images/wallet.png';
function Scale() {
  return (
    <div className='flex flex-col justify-center mt-[4rem]'>
      <div className="flex flex-col items-center text-center space-y-3">
  {/* Features Section */}
  <div className="flex flex-wrap justify-center space-x-6 sm:space-x-12 md:space-x-20 lg:space-x-32">
    <p className="text-sm md:text-lg font-semibold">Live Support</p>
    <p className="text-sm md:text-lg font-semibold">Instant Results</p>
    <p className="text-sm md:text-lg font-semibold">Secured</p>
  </div>

  {/* Dividers */}
  <div className="flex justify-center space-x-20 md:space-x-40 lg:space-x-60">
    <p className="text-lg font-bold">|</p>
    <p className="text-lg font-bold">|</p>
    <p className="text-lg font-bold">|</p>
  </div>

  {/* Scale Section */}
  <div className="lg:w-[1000px] md:w-[700px] flex justify-center relative  px-4">
    <div id="Scale" className="lg:w-[1000px] md:w-[700px] w-[300px] px-2 py-2 rounded-[40px] mt-2 relative z-20 bg-gradient-to-r ">
      <p id="Scale2" className="lg:w-[800px] md:w-[600px] w-[250px] h-[13px]"></p>
    </div>
  </div>
</div>


<div className="md:flex  hidden relative justify-between pe-10">
  <div className="absolute lg:left-14 left-0 z-0 lg:-top-20 -top-16">
    <img src={rocket} alt="Rocket" />
  </div>

  <div className="absolute lg:right-14 right-8 z-0 lg:-top-24 -top-24">
    <img src={wallet} alt="Wallet" />
  </div>
</div>

    </div>
  )
}

export default Scale
