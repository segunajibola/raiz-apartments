'use client'

import { useState, useEffect } from 'react'

const faqs = [
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is from 2:00 PM and check-out is by 12:00 PM (noon). Early check-in or late check-out can be arranged for an additional fee, subject to availability.',
  },
  {
    q: 'Is the apartment self-contained / fully furnished?',
    a: 'Yes. All our units are fully furnished and equipped with a kitchen (or kitchenette), quality bedding, towels, crockery, cookware, smart TV, high-speed WiFi, and air conditioning.',
  },
  {
    q: 'How do I confirm my booking?',
    a: 'Submit the booking form above. Our team will contact you within 24 hours via email or WhatsApp to confirm availability and provide payment details. No upfront payment is required through the form.',
  },
  {
    q: 'Is there parking available?',
    a: 'Yes, secure on-site parking is available for all guests. It is complimentary for Two-Bedroom apartment guests and available at a daily rate for Studio and One-Bedroom guests.',
  },
  {
    q: 'Are pets allowed?',
    a: 'We currently do not accommodate pets in our apartments. Please contact us directly if you have specific requirements and we will do our best to assist.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Bookings cancelled 72 hours or more before check-in receive a full refund. Cancellations within 72 hours may incur a one-night charge. Please contact us for special circumstances.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    // Open first FAQ after mount
    const timer = setTimeout(() => setOpenIndex(0), 400)
    return () => clearTimeout(timer)
  }, [])

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(index)
    }
  }

  return (
    <section id="faq" className="py-24 bg-brand-lightgray dark:bg-brand-dark">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">Common Questions</h2>
        </div>

        <div className="space-y-3 reveal" id="faq-container">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                <div
                  className="faq-question"
                  aria-expanded={isOpen}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                >
                  <span>{faq.q}</span>
                  <i className="fas fa-chevron-down faq-icon"></i>
                </div>
                <div className={`faq-answer${isOpen ? ' open' : ''}`} role="region">
                  <p>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
