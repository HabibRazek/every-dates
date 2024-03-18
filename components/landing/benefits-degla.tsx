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

      {/* Nutritional Facts */}
      <div className="w-full max-w-6xl sm:ml-40 grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        <div className="text-left">
          <h3 className="font-semibold mb-2">Vitamins:</h3>
          <ul className="list-disc list-inside">
            <li>Vitamin B6 8%</li>
            <li>Niacin 6%</li>
            <li>Pantothenic Acid 6%</li>
            <li>Folate 5%</li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-semibold mb-2">Nutrients:</h3>
          <ul className="list-disc list-inside">
            <li>Dietary Fiber 32%</li>
            <li>Carbohydrates 25%</li>
            <li>Calories 14%</li>
            <li>Protein 5%</li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-semibold mb-2">Minerals:</h3>
          <ul className="list-disc list-inside">
            <li>Potassium 19%</li>
            <li>Manganese 13%</li>
            <li>Magnesium 11%</li>
            <li>Copper 10%</li>
          </ul>
        </div>
      </div>

      <p className="text-xs mt-4">
        *Percentage of Daily Values based on 100g of dates.
      </p>
    </div>
    </>
  );
}

export default Benefits;
