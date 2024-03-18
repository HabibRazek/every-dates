// import React from 'react';
// import Image from 'next/image';
// import Arabian from '../arabianbg';

// const WhatWeDo = () => {
//   return (
//     <div className="relative p-5 md:p-10">
//       <Arabian />
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">

//         {/* Text Section */}
//         <div className="md:w-1/2 text-left space-y-6 p-4">
//           <h2 className="text-3xl font-bold mb-4 text-[#3f3115] border-b-4 w-48 border-[#3f3115]">What we do</h2>
//           <p className="text-lg">
//             We specialize in allergen-free bars: all our products are certified
//             peanut-free, vegan, and gluten-free. Numerous other claims are also
//             available to meet your needs.
//           </p>
//           <ul className="list-disc pl-5">
//             <li>Date-based snacks</li>
//             <li>Healthy and nutritious</li>
//             <li>100% raw and natural</li>
//             {/* ... Add the rest of your list items */}
//           </ul>
//         </div>

//         {/* Image and Product Section */}
//         <div className="md:w-1/2 flex flex-col items-center md:items-end mt-6 md:mt-0">
//           <div className="relative w-full h-80 md:h-full">

//             <Image
//               src="/assets/flavors.png"
//               alt="Product Image"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatWeDo;


import React from 'react';
import Image from 'next/image';
import Arabian from '../arabianbg';

const WhatWeDo = () => {
  return (
    <div className="relative mb-[1x] mt-5  overflow-hidden before:content-[''] sm:mt-[-1px] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full before:bg-no-repeat before:bg-top before:-z-10 ">
      <Arabian />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 pt-24 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">

          <div className="lg:w-1/2 sm:mt-[-100px]">
            <div className="text-left">
              <h1 className="text-4xl font-bold w-96 text-gray-800 px-4 sm:border-b-4 border-[#3f3115] dark:text-white md:text-5xl lg:text-6xl transition duration-300 ease-in-out">
                What we do
              </h1>
              <p className="mt-5 text-lg px-5 text-gray-600 dark:text-gray-400">
                We specialize in allergen-free bars: all our products are certified
                peanut-free, vegan, and gluten-free. Numerous other claims are also
                available to meet your needs.
              </p>


            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-10 lg:mt-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/flavors.png"
              alt="landing"
              width={700}
              height={700}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

