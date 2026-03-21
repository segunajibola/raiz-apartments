'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // 1. Scroll-reveal via IntersectionObserver
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    // 2. Navbar scrolled class
    const navbar = document.getElementById('navbar')
    const handleScroll = () => {
      if (!navbar) return
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // 3. Active nav link highlighting via IntersectionObserver
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              ;(link as HTMLElement).style.color = ''
              if (link.getAttribute('href') === `#${entry.target.id}`) {
                ;(link as HTMLElement).style.color = '#C9A84C'
              }
            })
          }
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => sectionObserver.observe(s))

    // 4. Smooth scroll on anchor links with navbar offset
    const handleAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      const targetId = anchor.getAttribute('href')?.slice(1)
      if (!targetId) return
      const target = document.getElementById(targetId)
      if (!target) return
      e.preventDefault()
      const navEl = document.getElementById('navbar')
      const offset = (navEl?.offsetHeight ?? 80) + 16
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' })
    }
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  return null
}
