import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-xl font-bold text-black">
              Petrong
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className=" text-black hover:text-white">
              About Us
            </Link>
            <Link href="#" className=" text-black hover:text-white">
              Services
            </Link>
            <Link href="#" className="text-black hover:text-white">
              Contact
            </Link>
          </div>

         </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Petrong Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
