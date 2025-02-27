import React from 'react';

function FeatureCard({ title, description, image }) {
  return (
    <>
    
    <div className="flex  md:flex-row flex-col-reverse space-x-3  bg-gray-900 w-[560px] p-8 items-center border-transparent shadow-lg shadow-gray-600 font-semibold rounded-[30px] backdrop-blur-lg mt-10">
      <div>
        <p className="text-[30px] font-bold">{title}</p>
        <p className="w-[230px] mt-5 opacity-50">{description}</p>
      </div>
      <div>
        <img src={image} alt="Feature" />
      </div>
    </div>
    
    </>
  );
}

export default FeatureCard;
