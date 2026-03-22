'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { apartmentFeatures } from '@/data/data'

type TabType = 'studio' | 'one-bed' | 'two-bed'

export default function Apartments() {
  const [activeTab, setActiveTab] = useState<TabType>('studio')
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!panelRef.current) return
    const reveals = panelRef.current.querySelectorAll('.reveal')
    reveals.forEach((el) => {
      el.classList.remove('visible')
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add('visible'), 50)
      })
    })
  }, [activeTab])

  return (
    <section id="apartments" className="py-24 bg-white dark:bg-brand-darker">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Our Units</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">Choose Your Space</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Each unit is fully furnished and equipped with everything you need for a comfortable, productive stay.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex bg-brand-lightgray dark:bg-brand-dark rounded-full p-1 gap-1">
            <button
              onClick={() => setActiveTab('studio')}
              id="tab-studio"
              className={`apt-tab px-5 py-2.5 rounded-full text-sm font-semibold transition-all${activeTab === 'studio' ? ' active-tab' : ''}`}
            >
              Studio
            </button>
            <button
              onClick={() => setActiveTab('one-bed')}
              id="tab-one-bed"
              className={`apt-tab px-5 py-2.5 rounded-full text-sm font-semibold transition-all${activeTab === 'one-bed' ? ' active-tab' : ''}`}
            >
              One-Bedroom
            </button>
            <button
              onClick={() => setActiveTab('two-bed')}
              id="tab-two-bed"
              className={`apt-tab px-5 py-2.5 rounded-full text-sm font-semibold transition-all${activeTab === 'two-bed' ? ' active-tab' : ''}`}
            >
              Two-Bedroom
            </button>
          </div>
        </div>

        {/* Active panel wrapper */}
        <div ref={panelRef}>
          {/* STUDIO */}
          <div id="apt-studio" className={`apt-panel reveal${activeTab !== 'studio' ? ' hidden' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video gallery-card">
                  <Image src="/images/studio-apartment.jpg" alt="Studio apartment" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/living-room.jpg" alt="Living room" fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/kitchen.jpg" alt="Kitchen" fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/bathrom.jpg" alt="Bathroom" fill className="object-cover" sizes="33vw" />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-3 py-1 text-gold text-xs font-semibold mb-4">Studio Unit</div>
                <h3 className="font-serif text-3xl font-bold text-brand-gray dark:text-white mb-4">Cosy Studio Apartment</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Perfect for solo travellers or couples. Our studios offer a thoughtfully designed open-plan living space with a fully equipped kitchenette, plush king-size bed, and a modern en-suite bathroom — everything you need in a compact, stylish package.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {apartmentFeatures.studio.map((f) => (
                    <div key={f.label} className="feature-pill"><i className={`fas ${f.icon} text-gold`}></i> {f.label}</div>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30">
                  Book This Unit <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ONE-BEDROOM */}
          <div id="apt-one-bed" className={`apt-panel reveal${activeTab !== 'one-bed' ? ' hidden' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video gallery-card">
                  <Image src="/images/one-bedroom-apartment.jpg" alt="One-bedroom apartment" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/one-bedroom-apartment2.jpg" alt="Bedroom" fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/living-room2.jpg" alt="Living room" fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/kitchen2.jpg" alt="Kitchen" fill className="object-cover" sizes="33vw" />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-3 py-1 text-gold text-xs font-semibold mb-4">1-Bedroom Unit</div>
                <h3 className="font-serif text-3xl font-bold text-brand-gray dark:text-white mb-4">One-Bedroom Apartment</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Spacious and elegant, our one-bedroom apartments feature a separate living room, a fully equipped kitchen, and a luxurious master bedroom. Ideal for extended stays, business travellers, and couples who want more room to breathe.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {apartmentFeatures.oneBed.map((f) => (
                    <div key={f.label} className="feature-pill"><i className={`fas ${f.icon} text-gold`}></i> {f.label}</div>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30">
                  Book This Unit <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>

          {/* TWO-BEDROOM */}
          <div id="apt-two-bed" className={`apt-panel reveal${activeTab !== 'two-bed' ? ' hidden' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video gallery-card">
                  <Image src="/images/two-bedroom-apartment.jpg" alt="Two-bedroom apartment" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/living-room.jpg" alt="Master bedroom" fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/kitchen.jpg" alt="Second bedroom" fill className="object-cover" sizes="33vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square gallery-thumb cursor-pointer hover:ring-2 hover:ring-gold transition-all">
                    <Image src="/images/bathrom.jpg" alt="Living area" fill className="object-cover" sizes="33vw" />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-3 py-1 text-gold text-xs font-semibold mb-4">2-Bedroom Unit</div>
                <h3 className="font-serif text-3xl font-bold text-brand-gray dark:text-white mb-4">Two-Bedroom Apartment</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Our premium two-bedroom apartments are perfect for families, groups, or those who simply love space. With two en-suite bedrooms, a spacious living and dining area, and a full kitchen, this unit offers the ultimate in comfort and versatility.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {apartmentFeatures.twoBed.map((f) => (
                    <div key={f.label} className="feature-pill"><i className={`fas ${f.icon} text-gold`}></i> {f.label}</div>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30">
                  Book This Unit <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
