'use client';

import React from 'react';
import { useInViewSection } from '@/hooks/useInViewSection';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInViewSection(0.4);

  return (
    <section
      ref={ref}
      id="section5"
      className="scroll-section relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center py-16 px-4 transition-all duration-1000 ease-in-out"
    >
      {/* Background with grayscale transition */}
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000 ease-in-out 
        ${inView ? 'grayscale-0 opacity-90' : 'grayscale opacity-60'} -z-10`}
        style={{ backgroundImage: `url('/bgfour.webp')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-200 backdrop-blur-sm z-0" />

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Contact{' '}
          <span className="text-[#2C5374] drop-shadow text-shadow-gray-700 text-shadow-lg/30">
            Us
          </span>
        </h2>
        <p className="text-center text-gray-900 mb-10 text-base md:text-lg max-w-2xl mx-auto">
          For inquiries or additional information, please contact our dedicated team.
        </p>

        <div className="flex flex-col md:flex-row gap-12 text-gray-900">
          {/* Contact Info */}
          <div className="flex-1 text-gray-900 text-base space-y-4">
            <p>
              📞 <strong>Phone:</strong>{' '}
              <a href="tel:+971545548060" className="hover:underline">
                +971 54 554 8060
              </a>
            </p>
            <p>
              📧 <strong>Email:</strong>{' '}
              <a href="mailto:f.kiaewe@zeil.holdings" className="hover:underline">
                f.kiaewe@zeil.holdings
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="flex-1 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-900 text-gray-900 bg-transparent rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-900 text-gray-900 bg-transparent rounded-md"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-900 text-gray-900 bg-transparent rounded-md"
            ></textarea>
            <button
              type="submit"
              className="uppercase text-sm tracking-widest font-medium text-white bg-[#2C5374] px-6 py-3 rounded-md transition hover:bg-white hover:text-[#2C5374] hover:border hover:border-[#2C5374]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
