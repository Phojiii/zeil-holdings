'use client'

import { FormEvent, useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="scroll-section contact-us-section" id="section5">
      <div className="container py-5">
        <h2 className="reveal text-center">
          Contact <span className="heading-span">Us</span>
        </h2>
        <p className="reveal text-center mb-4">
          For inquiries or additional information, please contact our dedicated team.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <p className="reveal">
              📞 <strong>Phone:</strong> +971 54 554 8060
            </p>
            <p className="reveal">
              📧 <strong>Email:</strong> <a href="mailto:f.kiaewe@zeil.holdings">f.kiaewe@zeil.holdings</a>
            </p>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="full_name" 
              placeholder="Full Name" 
              required
              value={formData.full_name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea 
              name="message" 
              rows={5} 
              placeholder="Message" 
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="getintouch">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
} 