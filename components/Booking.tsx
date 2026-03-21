'use client'

import { useState, useRef, useEffect } from 'react'

function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function showFormError(msg: string) {
  const el = document.createElement('div')
  el.className =
    'fixed top-24 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-5 py-3 rounded-full shadow-xl z-50 transition-opacity duration-500'
  el.textContent = msg
  document.body.appendChild(el)
  setTimeout(() => {
    el.style.opacity = '0'
    setTimeout(() => el.remove(), 500)
  }, 3000)
}

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [durationText, setDurationText] = useState('')
  const [showDuration, setShowDuration] = useState(false)

  const checkinRef = useRef<HTMLInputElement>(null)
  const checkoutRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Set min checkin to today
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayStr = today.toISOString().split('T')[0]
    if (checkinRef.current) checkinRef.current.min = todayStr
  }, [])

  const updateDuration = () => {
    const checkin = checkinRef.current?.value
    const checkout = checkoutRef.current?.value
    if (!checkin || !checkout) {
      setShowDuration(false)
      return
    }
    const checkinDate = new Date(checkin)
    const checkoutDate = new Date(checkout)
    const nights = Math.round((checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60 * 24))
    if (nights > 0) {
      setDurationText(
        `${nights} night${nights > 1 ? 's' : ''} selected  ·  ${formatDate(checkinDate)} → ${formatDate(checkoutDate)}`
      )
      setShowDuration(true)
    } else {
      setShowDuration(false)
    }
  }

  const handleCheckinChange = () => {
    const checkin = checkinRef.current?.value
    if (!checkin || !checkoutRef.current) return
    const minCheckout = new Date(checkin)
    minCheckout.setDate(minCheckout.getDate() + 1)
    checkoutRef.current.min = minCheckout.toISOString().split('T')[0]
    if (checkoutRef.current.value && checkoutRef.current.value <= checkin) {
      checkoutRef.current.value = ''
      setShowDuration(false)
    } else {
      updateDuration()
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const checkin = checkinRef.current?.value
    const checkout = checkoutRef.current?.value
    if (checkin && checkout && new Date(checkout) <= new Date(checkin)) {
      showFormError('Check-out date must be after check-in date.')
      return
    }
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = {}
    data.forEach((v, k) => { payload[k] = v as string })
    payload.timestamp = new Date().toISOString()
    setTimeout(() => {
      console.log('Booking payload:', payload)
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  const resetForm = () => {
    setSubmitted(false)
    setShowDuration(false)
  }

  return (
    <section id="booking" className="py-24 bg-brand-lightgray dark:bg-brand-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Reserve Your Stay</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">Book Your Apartment</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Fill in the form below and our team will confirm your reservation within 24 hours.</p>
        </div>

        <div className="bg-white dark:bg-brand-darker rounded-3xl shadow-2xl p-8 md:p-12 reveal">
          {/* Success message */}
          {submitted ? (
            <div id="booking-success" className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-green-500 text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-gray dark:text-white mb-2">Booking Request Sent!</h3>
              <p className="text-gray-400 mb-6">Thank you! Our team will confirm your reservation within 24 hours. Check your email for details.</p>
              <button onClick={resetForm} className="text-gold hover:text-gold-dark text-sm font-semibold underline">
                Make another booking
              </button>
            </div>
          ) : (
            /* Form */
            <form id="booking-form" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="md:col-span-1">
                <label className="form-label">Full Name *</label>
                <input type="text" name="name" required placeholder="John Doe" className="form-input" />
              </div>
              {/* Email */}
              <div className="md:col-span-1">
                <label className="form-label">Email Address *</label>
                <input type="email" name="email" required placeholder="john@example.com" className="form-input" />
              </div>
              {/* Phone */}
              <div className="md:col-span-1">
                <label className="form-label">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="+234 800 000 0000" className="form-input" />
              </div>
              {/* Apartment Type */}
              <div className="md:col-span-1">
                <label className="form-label">Apartment Type *</label>
                <select name="apt_type" required className="form-input" defaultValue="">
                  <option value="" disabled>Select apartment type</option>
                  <option value="studio">Studio Apartment</option>
                  <option value="one-bed">One-Bedroom Apartment</option>
                  <option value="two-bed">Two-Bedroom Apartment</option>
                </select>
              </div>
              {/* Check-in */}
              <div className="md:col-span-1">
                <label className="form-label">Check-in Date *</label>
                <input
                  type="date"
                  name="checkin"
                  required
                  className="form-input"
                  id="checkin-date"
                  ref={checkinRef}
                  onChange={handleCheckinChange}
                />
              </div>
              {/* Check-out */}
              <div className="md:col-span-1">
                <label className="form-label">Check-out Date *</label>
                <input
                  type="date"
                  name="checkout"
                  required
                  className="form-input"
                  id="checkout-date"
                  ref={checkoutRef}
                  onChange={updateDuration}
                />
              </div>
              {/* Message */}
              <div className="md:col-span-2">
                <label className="form-label">Special Requests (optional)</label>
                <textarea name="message" rows={3} placeholder="Any special requirements or questions..." className="form-input resize-none" defaultValue=""></textarea>
              </div>

              {/* Estimated duration display */}
              {showDuration && (
                <div id="duration-display" className="md:col-span-2 bg-gold/10 border border-gold/30 rounded-2xl px-5 py-3 flex items-center gap-3 text-sm">
                  <i className="fas fa-moon text-gold"></i>
                  <span id="duration-text" className="text-brand-gray dark:text-white font-medium">{durationText}</span>
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  id="submit-btn"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 disabled:opacity-70"
                >
                  <span id="submit-text">{loading ? 'Sending…' : 'Request Booking'}</span>
                  {!loading && <i className="fas fa-arrow-right text-sm" id="submit-icon"></i>}
                  {loading && <i className="fas fa-spinner fa-spin text-sm" id="submit-spinner"></i>}
                </button>
                <p className="text-xs text-gray-400">By submitting, you agree to our terms. No payment required at this stage.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
