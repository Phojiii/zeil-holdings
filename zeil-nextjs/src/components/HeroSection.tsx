'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <div className="scroll-section hero-section" id="section1">
      <div className="container py-5">
        <div className="header-content">
          <h1 className="reveal">
            ZEIL Holdings: Driving excellence and sustainable growth<br />
            across industries.
          </h1>
          <a className="getintouch reveal" href="#section5">
            Get in Touch
          </a>
        </div>
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          className="video-js vjs-default-skin header-video"
        >
          <source src="/assets/img/header.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
} 