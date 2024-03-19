// SnackCreation.js
import React from 'react';
import Image from 'next/image';
import Arabian from '../arabianbg';

const SnackCreation = () => {
  return (
    <div className="relative sm:mt-0 mt-[-55px] mx-auto overflow-hidden">
      <Arabian />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="md:flex md:justify-end md:w-1/2">
          <div className="relative w-full h-96 md:h-auto">
            <Image
              src="/assets/factory.png"
              alt="Snack Creation Process"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="md:w-1/2 p-4 md:p-8  bg-opacity-90">
          <h2 className="text-3xl font-bold mb-5">Snack Creation</h2>
          <p className="mb-4 text-lg">
            Our R&D team is working to create the allergen-free bar that will perfectly meet your specifications:
            Type of bars (protein, energy, natural bars...)
          </p>
          <p className="mb-4 text-lg">
            Quality is our priority. Our professional team and excellent manufacturing equipment ensure that
            we produce your products to the highest standards of the food industry. We adhere to internationally
            recognized quality standards.
          </p>
          <p className="text-lg">
            To ensure taste quality and allergen-free products, our quality experts monitor every step of the
            manufacturing process, from the receipt of raw materials to the shipment of your finished products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SnackCreation;
