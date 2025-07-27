'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 text-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* About */}
          <div className="flex-1">
            <Image
              src="/Zeil-Logo.png"
              alt="Zeil Holdings Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p>
              <strong>ZEIL Holdings</strong> is a multi-sector company in the UAE,
              delivering trust and growth through real estate, finance, education,
              and tech. Together, we build impactful futures.
            </p>
          </div>

          {/* Links */}
          <div className="flex-1">
            <h4 className="text-white text-base font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#section1" className="hover:text-[#2C5374]">Home</a></li>
              <li><a href="#section2" className="hover:text-[#2C5374]">Our Divisions</a></li>
              <li><a href="#section3" className="hover:text-[#2C5374]">How We Work</a></li>
              <li><a href="#section4" className="hover:text-[#2C5374]">About</a></li>
              <li><a href="#section5" className="hover:text-[#2C5374]">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex-1">
            <h4 className="text-white text-base font-semibold mb-3">Connect</h4>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61576753161335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#2C5374] text-xl"
                >
                  <i className="fab fa-facebook-f text-xl hover:text-[#2C5374]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zeil.holdings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#2C5374] text-xl"
                >
                  <i className="fab fa-instagram text-xl hover:text-[#2C5374]" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/zeil_holdings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#2C5374] text-xl"
                >
                  <i className="fab fa-x-twitter text-xl hover:text-[#2C5374]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          &copy; 2025 ZEIL Holdings. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
