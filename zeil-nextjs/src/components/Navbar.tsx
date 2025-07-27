'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false)

  const toggleLeftMenu = () => {
    setIsLeftMenuOpen(!isLeftMenuOpen)
  }

  const toggleRightMenu = () => {
    setIsRightMenuOpen(!isRightMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <button className="menu-toggle" onClick={toggleLeftMenu}>
          <i className="fa fa-bars"></i> MENU
        </button>
        <Image 
          src="/assets/img/Zeil-Logo.png" 
          alt="Zeil Holding" 
          className="aratica-logo"
          width={120}
          height={40}
        />
        <button className="menu-toggle" onClick={toggleRightMenu}>
          PRODUCT <i className="fa fa-bars"></i>
        </button>
      </div>

      {/* Left Slide Menu */}
      <div className={`menu-overlay left ${isLeftMenuOpen ? 'open' : ''}`} id="menuOverlayLeft">
        <button className="close-btn" onClick={toggleLeftMenu}>✕</button>
        <Image 
          src="/assets/img/Zeil-Logo.png" 
          alt="Zeil Holding" 
          className="aratica-logo-nav"
          width={120}
          height={40}
        />
        <div className="menu-center">
          <ul>
            <li><a href="#section1">Home</a></li>
            <li><a href="#section2">Our Divisions</a></li>
            <li><a href="#section3">How We Work</a></li>
            <li><a href="#section4">About</a></li>
            <li><a href="#section5">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Right Slide Menu */}
      <div className={`menu-overlay right ${isRightMenuOpen ? 'open' : ''}`} id="menuOverlayRight">
        <button className="close-btn" onClick={toggleRightMenu}>✕</button>
        <Image 
          src="/assets/img/Zeil-Logo.png" 
          alt="Zeil Holding" 
          className="aratica-logo-nav"
          width={120}
          height={40}
        />
        <div className="menu-center">
          <ul>
            <li><a href="#section2">Crypto</a></li>
            <li><a href="#section3">Banking</a></li>
            <li><a href="#section4">Foundation</a></li>
            <li><a href="#section5">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
} 