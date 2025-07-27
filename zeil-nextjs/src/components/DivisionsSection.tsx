'use client'

import Image from 'next/image'

const divisions = [
  {
    id: 1,
    name: 'Zeil Real Estate',
    description: 'Innovative spaces for modern living',
    image: '/assets/img/realestate.png',
    alt: 'Vision-Driven Growth'
  },
  {
    id: 2,
    name: 'Zeil Finance',
    description: 'Empowering financial success daily',
    image: '/assets/img/finance.png',
    alt: 'Trust & Transparency'
  },
  {
    id: 3,
    name: 'Zeil Academy',
    description: 'Cultivating talent through innovation',
    image: '/assets/img/academy.png',
    alt: 'Agile Execution'
  },
  {
    id: 4,
    name: 'Zeil Tech',
    description: 'Driving tech-forward solutions',
    image: '/assets/img/tech.png',
    alt: 'Impact-Led Innovation'
  }
]

export default function DivisionsSection() {
  return (
    <div className="scroll-section bg-light how-we-work" id="section2">
      <div className="container py-5">
        <h2 className="reveal">
          Our <span className="heading-span">Divisions</span>
        </h2>
        <p className="reveal">
          Each of our specialized subsidiaries is dedicated to excellence. Click below to explore more:
        </p>
        <div className="work-cards reveal">
          {divisions.map((division) => (
            <div key={division.id} className="work-card">
              <Image 
                src={division.image} 
                alt={division.alt}
                width={60}
                height={60}
              />
              <h3>{division.name}</h3>
              <p>{division.description}</p>
              <a href="#section5">Visit Site</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 