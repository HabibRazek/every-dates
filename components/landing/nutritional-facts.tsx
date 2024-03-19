// NutritionalFacts.js
import React from 'react';
import Arabian from '../arabianbg';

const NutritionalFacts = () => {
  return (
    <div className="flex  relative flex-col items-center justify-center  ">
      <Arabian />
      <div className="bg-white shadow-lg opacity-80  rounded-lg p-6 sm:mt-[-100px]">
        <h2 className="text-2xl font-bold text-center mb-6">Nutritional Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Vitamins</h3>
            <ul className="space-y-2">
              <li className="text-md">Vitamin B6 8%</li>
              <li className="text-md">Niacin 6%</li>
              <li className="text-md">Pantothenic Acid 6%</li>
              <li className="text-md">Folate 5%</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Nutrients</h3>
            <ul className="space-y-2">
              <li className="text-md">Dietary Fiber 32%</li>
              <li className="text-md">Carbohydrates 25%</li>
              <li className="text-md">Calories 14%</li>
              <li className="text-md">Protein 5%</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Minerals</h3>
            <ul className="space-y-2">
              <li className="text-md">Potassium 19%</li>
              <li className="text-md">Manganese 13%</li>
              <li className="text-md">Magnesium 11%</li>
              <li className="text-md">Copper 10%</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-center mt-6 italic">
          *Percentage of Daily Values based on 100g of dates.
        </p>
      </div>
    </div>
  );
};

export default NutritionalFacts;
