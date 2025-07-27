'use client'

import Image from 'next/image'

const workMethods = [
  {
    id: 1,
    title: 'Transparent Processes',
    description: 'Every venture is built on integrity and clear communication.',
    image: '/assets/img/tranparentprocesses.png',
    alt: 'Transparent Processes'
  },
  {
    id: 2,
    title: 'Client-Centric Vision',
    description: 'Your goals define our path – we scale with your success.',
    image: '/assets/img/clientcentric.png',
    alt: 'Client-Centric Vision'
  },
  {
    id: 3,
    title: 'Innovative Solutions',
    description: 'We embrace modern tools and methods to future-proof your investments.',
    image: '/assets/img/solutions.png',
    alt: 'Innovative Solutions'
  },
  {
    id: 4,
    title: 'Sustainable Growth',
    description: 'Long-term strategies that deliver real value.',
    image: '/assets/img/sustainability.png',
    alt: 'Sustainable Growth'
  }
]

export default function HowWeWorkSection() {
  return (
    <div className="scroll-section our-companies" id="section3">
      <div className="container py-5">
        <h2 className="reveal">
          How We <span className="heading-span">Work</span>
        </h2>
        <p className="reveal">
          At ZEIL Holdings, we combine deep industry knowledge with a people-first approach.
        </p>

        <div className="companies-grid reveal">
          {workMethods.map((method) => (
            <div key={method.id} className="company-card">
              <Image 
                src={method.image} 
                alt={method.alt}
                width={60}
                height={60}
              />
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 