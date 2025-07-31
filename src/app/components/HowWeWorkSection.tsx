'use client';

import React from 'react';
import Image from 'next/image';
import { useInViewSection } from '@/hooks/useInViewSection';

const features = [
  {
    img: '/tranparentprocesses.png',
    title: 'Transparent Processes',
    desc: 'Every venture is built on integrity and clear communication.',
  },
  {
    img: '/clientcentric.png',
    title: 'Client-Centric Vision',
    desc: 'Your goals define our path – we scale with your success.',
  },
  {
    img: '/solutions.png',
    title: 'Innovative Solutions',
    desc: 'We embrace modern tools and methods to future-proof your investments.',
  },
  {
    img: '/sustainability.png',
    title: 'Sustainable Growth',
    desc: 'Long-term strategies that deliver real value.',
  },
];

const HowWeWorkSection: React.FC = () => {
  const { ref, inView } = useInViewSection(0.4);

  return (
    <section
      ref={ref}
      id="section3"
      className="scroll-section relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center py-16 px-4 transition-all duration-1000 ease-in-out"
    >
      {/* Background layer */}
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000 ease-in-out 
        ${inView ? 'grayscale-0 opacity-90' : 'grayscale opacity-60'} -z-10`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-200 backdrop-blur-sm z-0" />

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How We{' '}
          <span className="text-[#2C5374] drop-shadow text-shadow-gray-700 text-shadow-lg/30">
            Work
          </span>
        </h2>
        <p className="text-gray-900 mb-12 max-w-xl mx-auto text-base md:text-lg">
          At ZEIL Holdings, we combine deep industry knowledge with a people-first approach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between transition-all duration-300 transform hover:-translate-y-3"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#2C5374] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
