import React from 'react';
import Image from 'next/image';
import Arabian from '../arabianbg';

const SnackCreation = () => {
  return (
    <div className="relative  mx-auto ">
      <Arabian />
      <div className="md:flex max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="md:w-1/2 mt-14 w-96 h-96 bg">
          {/* Placeholder for the image - replace '/assets/snack-creation.jpg' with your actual image path */}
          <Image
            src="/assets/factory.png"
            alt="Snack Creation Process"
            width={500}  // Adjust the width as per your image's aspect ratio
            height={500} // Adjust the height as per your image's aspect ratio
            objectFit="cover" // Or "contain" based on your preference
          />
        </div>

        {/* Text Content Section */}
        <div className="md:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Snack Creation</h2>
          <p className="mb-3">
            Our R&D team is working to create the allergen-free bar that will perfectly meet your specifications:
            Type of bars (protein, energy, natural bars...)
          </p>
          <p className="mb-3">
            Quality is our priority. Our professional team and excellent manufacturing equipment ensure that
            we produce your products to the highest standards of the food industry. We adhere to internationally
            recognized quality standards.
          </p>
          <p>
            To ensure taste quality and allergen-free products, our quality experts monitor every step of the
            manufacturing process, from the receipt of raw materials to the shipment of your finished products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SnackCreation;
