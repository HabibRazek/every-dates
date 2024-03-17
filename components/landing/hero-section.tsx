import React from 'react';
import { Button } from '../ui/button';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden before:content-[''] sm:mt-[-20px] mt-[-30px] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full before:bg-no-repeat before:bg-top before:-z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 pt-24 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">

          <div className="lg:w-1/2">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-5xl lg:text-6xl dark:hover:text-emerald-400 transition duration-300 ease-in-out">
              Discover Delight with EVERYDATE
              </h1>
              <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
              Savor the perfect blend of health and taste with our premium date-based snacks. Each bite promises freshness, quality, and a flavorful journey designed for every moment of your day. With EVERYDATE, embrace a new taste discovery daily.
              </p>
              <div className="flex justify-start gap-2 mt-2">
                <Link href="/auth/login">
                  <Button variant='custom' className='rounded-full text-gray-900 px-6  transition duration-300 ease-in-out'>
                    Get Started <FaArrowRight className='ml-2' />
                  </Button>
                </Link>
              </div>
              <Image
              src="/assets/Vector.png"
              alt="landing"
              width={200}
              height={200}
              className='mt-4'

            />
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-10 lg:mt-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/everydate.png"
              alt="landing"
              width={700}
              height={700}
              layout="responsive"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
