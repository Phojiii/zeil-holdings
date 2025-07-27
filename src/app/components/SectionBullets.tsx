'use client';

import React from 'react';

interface Props {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

const SectionBullets: React.FC<Props> = ({ activeIndex, onNavigate }) => {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {[0, 1, 2, 3, 4].map((i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={`w-4 h-4 rounded-full border transition duration-300 flex items-center justify-center ${
            activeIndex === i ? 'border-white' : 'border-transparent'
          }`}
        >
          <span
            className={`block w-2 h-2 rounded-full ${
              activeIndex === i ? 'bg-white' : 'bg-gray-300'
            }`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default SectionBullets;
