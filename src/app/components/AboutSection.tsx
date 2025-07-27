'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="section4"
      className="scroll-section relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center py-16 px-4"
      style={{ backgroundImage: `url('/aboutus.png')` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
          About <span className="text-[#2C5374] drop-shadow text-shadow-gray-100 text-shadow-lg/30">Zeil</span> Holdings
        </h2>
        <p className="text-base md:text-lg text-gray-100 leading-relaxed">
          ZEIL Holdings is a UAE-based parent company driving impactful change through its four focused subsidiaries:
          Zeil Real Estate, Zeil Finance, Zeil Academy, and Zeil Tech. We aim to bridge opportunity with reliability –
          delivering excellence in every sector we enter. Our commitment is to empower clients and communities with
          knowledge, capital, digital power, and property excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
