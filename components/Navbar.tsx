'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [themeIcon, setThemeIcon] = useState<'moon' | 'sun'>('moon')

  useEffect(() => {
    const saved = localStorage.getItem('raiz-theme') || 'light'
    setThemeIcon(saved === 'dark' ? 'sun' : 'moon')
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const isDark = html.classList.contains('dark')
    if (isDark) {
      html.classList.remove('dark')
      localStorage.setItem('raiz-theme', 'light')
      setThemeIcon('moon')
    } else {
      html.classList.add('dark')
      localStorage.setItem('raiz-theme', 'dark')
      setThemeIcon('sun')
    }
  }

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev)
  }

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold text-sm">R</span>
          <span className="font-serif text-xl font-bold text-white group-hover:text-gold-light transition-colors" id="nav-logo">Raiz</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><a href="#about"      className="nav-link text-white/90 hover:text-gold transition-colors">About</a></li>
          <li><a href="#apartments" className="nav-link text-white/90 hover:text-gold transition-colors">Apartments</a></li>
          <li><a href="#amenities"  className="nav-link text-white/90 hover:text-gold transition-colors">Amenities</a></li>
          <li><a href="#location"   className="nav-link text-white/90 hover:text-gold transition-colors">Location</a></li>
          <li><a href="#contact"    className="nav-link text-white/90 hover:text-gold transition-colors">Contact</a></li>
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-gold hover:bg-white/10 transition-all"
            aria-label="Toggle dark mode"
          >
            <i className={`fas fa-${themeIcon} text-sm`} id="theme-icon"></i>
          </button>

          {/* Book Now CTA */}
          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
          >
            Book Now <i className="fas fa-arrow-right text-xs"></i>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobile}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <i className={`fas fa-${mobileOpen ? 'xmark' : 'bars'} text-sm`} id="menu-icon"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-3"
        >
          <a href="#about"      onClick={closeMobile} className="block text-white/90 hover:text-gold py-2 transition-colors">About</a>
          <a href="#apartments" onClick={closeMobile} className="block text-white/90 hover:text-gold py-2 transition-colors">Apartments</a>
          <a href="#amenities"  onClick={closeMobile} className="block text-white/90 hover:text-gold py-2 transition-colors">Amenities</a>
          <a href="#location"   onClick={closeMobile} className="block text-white/90 hover:text-gold py-2 transition-colors">Location</a>
          <a href="#contact"    onClick={closeMobile} className="block text-white/90 hover:text-gold py-2 transition-colors">Contact</a>
          <a href="#booking"    onClick={closeMobile} className="inline-block bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2">Book Now</a>
        </div>
      )}
    </nav>
  )
}
