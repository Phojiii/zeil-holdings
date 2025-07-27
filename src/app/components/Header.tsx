'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const toggleMenuLeft = () => setIsLeftOpen((prev) => !prev);
  const toggleMenuRight = () => setIsRightOpen((prev) => !prev);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <button className="menu-toggle text-lg text-black" onClick={toggleMenuLeft}>
          <i className="fa fa-bars" /> MENU
        </button>

        <Image
          src="/Zeil-Logo.png"
          alt="Zeil Holdings"
          width={120}
          height={40}
          className="h-10 object-contain"
        />

        <button className="menu-toggle text-lg text-black" onClick={toggleMenuRight}>
          PRODUCT <i className="fa fa-bars" />
        </button>
      </div>

      {/* Left Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-40 transform transition-transform duration-300 ${
          isLeftOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-black" onClick={toggleMenuLeft}>
          ✕
        </button>

        <div className="flex flex-col items-center mt-10 ">
          <Image
            src="/Zeil-Logo.png"
            alt="Zeil Logo"
            width={100}
            height={40}
            className="mb-8"
          />
          <ul className="space-y-5 text-xl text-center flex flex-col content-center justify-center text-black">
            <li><a href="#section1" className="hover:text-[#2C5374]">Home</a></li>
            <li><a href="#section2" className="hover:text-[#2C5374]">Our Divisions</a></li>
            <li><a href="#section3" className="hover:text-[#2C5374]">How We Work</a></li>
            <li><a href="#section4" className="hover:text-[#2C5374]">About</a></li>
            <li><a href="#section5" className="hover:text-[#2C5374]">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Right Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-40 transform transition-transform duration-300 text-black ${
          isRightOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl" onClick={toggleMenuRight}>
          ✕
        </button>

        <div className="flex flex-col items-center mt-10">
          <Image
            src="/Zeil-Logo.png"
            alt="Zeil Logo"
            width={100}
            height={40}
            className="mb-8"
          />
          <ul className="space-y-5 text-xl text-center flex flex-col content-center justify-center text-black">
            <li><a href="#section2" className="hover:text-[#2C5374]">Crypto</a></li>
            <li><a href="#section3" className="hover:text-[#2C5374]">Banking</a></li>
            <li><a href="#section4" className="hover:text-[#2C5374]">Foundation</a></li>
            <li><a href="#section5" className="hover:text-[#2C5374]">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
