import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="relative bg-white/50">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        <div className="lg:col-span-7">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={200}
            height={100}
            objectFit="contain"
          />
          <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
            Join 31,000+ other and never miss out on new tips, tutorials, and more.
          </p>

        </div>

        <div className="lg:col-span-5 lg:text-right">
          <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
          <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
            +1 526 654 8965
          </span>
          <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
            example@email.com
          </span>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700 col-span-full"/>

        <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
          © EVERYDATE 2024 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
