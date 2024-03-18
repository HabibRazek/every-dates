import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import Arabian from '../arabianbg';
import { FaArrowRight } from 'react-icons/fa';

const OurProducts = () => {
  return (
    <div className="relative py-10 px-4 md:px-10">
        <Arabian />
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 rounded-lg p-6 md:p-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">Discover a New Taste Every Day with <span className='border-b-4 border-[#3f3115]'>EVERYDATE</span></h2>
        <p className="text-xl text-gray-600 text-center mb-8">
        EVERYDATE is an innovative brand specializing in date-based snacks
        </p>
        <p className="text-md text-center text-gray-500 mb-4">
        The name <span className='font-bold'>EVERYDATE</span> reflects our commitment to offering superior quality products for every day of the year. Our snacks are designed for those who seek both health and flavor in their daily routine. Each product in our range is meticulously crafted to ensure freshness and exquisite taste, using the finest dates selected for their quality and natural flavor. Whether it’s for a tasty break, an energy boost, or a healthy sweet treat, EVERYDATE is the ideal choice. We pride ourselves on offering a variety of delicious and nutritious options that cater to the needs of each moment of the day, emphasizing our motto: a date for every date, a new taste discovery every day.
        </p>
        <div className="text-center mt-8">
          <Image
            src="/assets/product-fruit.png"
            alt="our-products"
            width={200}
            height={200}
            className='mx-auto w-14 animate-bounce'
          />
          <Link href="/products">
            <p>
              <Button variant="custom" className='rounded-full'>
                Explore Our Products <span className='ml-2'><FaArrowRight /></span>
              </Button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
