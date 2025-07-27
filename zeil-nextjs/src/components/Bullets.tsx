'use client'

interface BulletsProps {
  currentSectionIndex: number
  onSectionChange: (index: number) => void
}

export default function Bullets({ currentSectionIndex, onSectionChange }: BulletsProps) {
  const sections = ['Home', 'Our Divisions', 'How We Work', 'About', 'Contact']

  return (
    <div className="bullets">
      {sections.map((section, index) => (
        <div 
          key={index}
          className={`dot ${currentSectionIndex === index ? 'active' : ''}`}
          onClick={() => onSectionChange(index)}
        >
          <span className="inner-dot"></span>
        </div>
      ))}
    </div>
  )
} 