import React from 'react';
import Image from 'next/image';
import Arabian from '../arabianbg';

const Benefits = () => {
  return (
    <>
    <div className="flex relative  flex-col items-center p-5 md:p-10 text-center">
    < Arabian />
      <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3f3115]">Benefits of Deglet Noor Dates</h2>

      <div className="flex flex-wrap justify-around items-center w-full max-w-6xl">
        {/* Benefits Columns */}
        <div className="flex flex-wrap justify-around items-start mb-2 w-full">
          {/* Individual Benefit Items */}
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-blue-200 p-3 rounded-lg shadow-md">Digestive Support</div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-yellow-300 p-3 rounded-lg shadow-md">Improves Vision</div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-purple-300 p-3 rounded-lg shadow-md">Reduces Allergies</div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-orange-400 p-3 rounded-lg shadow-md">Increases Energy</div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-blue-300 p-3 rounded-lg shadow-md">Enhances Bone Health</div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-yellow-400 p-3 rounded-lg shadow-md">Soothes the Nervous System</div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 p-2">
            <div className="bg-green-300 p-3 rounded-lg shadow-md">Facilitates Weight Loss</div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center mt-[-20px] w-full">
          <Image
            src="/assets/Degla.png"
            alt="Deglet Noor Dates"
            width={500}
            height={500}

          />
        </div>
      </div>

      
    </div>
    </>
  );
}

export default Benefits;
