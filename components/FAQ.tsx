'use client'

import { useState, useEffect } from 'react'
import { faqs } from '@/data/data'

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
