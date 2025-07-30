'use client';

import React from 'react';
import Image from 'next/image';
import { useInViewSection } from '@/hooks/useInViewSection';

const divisions = [
  {
    img: '/realestate.png',
    title: 'Zeil Real Estate',
    desc: 'Innovative spaces for modern living',
    link: '#section5',
  },
  {
    img: '/finance.png',
    title: 'Zeil Finance',
    desc: 'Empowering financial success daily',
    link: '#section5',
  },
  {
    img: '/academy.png',
    title: 'Zeil Academy',
    desc: 'Cultivating talent through innovation',
    link: '#section5',
  },
  {
    img: '/tech.png',
    title: 'Zeil Tech',
    desc: 'Driving tech-forward solutions',
    link: '#section5',
  },
];

const DivisionsSection: React.FC = () => {
  const { ref, inView } = useInViewSection(0.4);

  return (
    <section
      ref={ref}
      id="section2"
      className="scroll-section relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center py-16 px-4 transition-all duration-1000 ease-in-out"
    >
      {/* Background layer */}
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000 ease-in-out 
          ${inView ? 'grayscale-0 opacity-90' : 'grayscale opacity-60'} -z-10`}
        style={{ backgroundImage: `url('/bgone.webp')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Our{' '}
          <span className="text-[#2C5374] drop-shadow text-shadow-gray-100 text-shadow-lg/30">
            Divisions
          </span>
        </h2>
        <p className="text-gray-100 mb-12 max-w-xl mx-auto text-base md:text-lg">
          Each of our specialized subsidiaries is dedicated to excellence. Click below to explore more:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((item, index) => (
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
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <a
                href={item.link}
                className="inline-block text-sm font-medium uppercase tracking-[5] text-white transition-all duration-300 bg-[#2C5374] py-3 px-6 border border-[#2C5374] hover:bg-white hover:text-[#2C5374] hover:rounded-md"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
