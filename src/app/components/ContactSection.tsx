'use client';

import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section
      id="section5"
      className="scroll-section relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center py-16 px-4"
      style={{ backgroundImage: `url('/contactus.png')` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-4">
          Contact <span className="text-[#2C5374] drop-shadow text-shadow-gray-100 text-shadow-lg/30">Us</span>
        </h2>
        <p className="text-center text-gray-100 mb-10 text-base md:text-lg max-w-2xl mx-auto">
          For inquiries or additional information, please contact our dedicated team.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 text-gray-100 text-base space-y-4">
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
              className="w-full p-3 border border-gray-200 text-white rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-200 text-white rounded-md"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-200 text-white rounded-md"
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
