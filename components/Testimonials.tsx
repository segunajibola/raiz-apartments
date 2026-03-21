export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-brand-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Guest Reviews</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">What Our Guests Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 italic">
              &ldquo;Absolutely loved my stay at Raiz. The apartment was spotless, the WiFi was fast, and the security gave me real peace of mind. Will definitely be back on my next Lagos trip!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">A</div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white text-sm">Amaka O.</div>
                <div className="text-gray-400 text-xs">Business Traveller, Abuja</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 italic">
              &ldquo;The two-bedroom unit was perfect for our family visit. Spacious, modern, and felt like home. The proximity to the airport made our early flight stress-free. Highly recommended!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">T</div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white text-sm">Tunde A.</div>
                <div className="text-xs text-gray-400">Family Stay, UK</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star text-gold text-sm"></i>
              <i className="fas fa-star-half-stroke text-gold text-sm"></i>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 italic">
              &ldquo;Clean, comfortable, and great value. The team were responsive and helpful throughout. I&apos;ve stayed at a lot of serviced apartments in Lagos — Raiz is top tier.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">C</div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white text-sm">Chidi M.</div>
                <div className="text-xs text-gray-400">Solo Traveller, Port Harcourt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
