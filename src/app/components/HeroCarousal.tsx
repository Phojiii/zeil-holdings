'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="section1"
      className="scroll-section relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 text-white max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
          ZEIL Holdings: Driving excellence and sustainable growth across industries.
        </h1>
        <a
          href="#section5"
          className="inline-block text-sm font-medium uppercase tracking-[5] text-[#4b4a4a] transition-all duration-300 bg-white py-4 px-6 border border-white hover:bg-[#2C5374] hover:text-white hover:rounded-md"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
