import { testimonials } from '@/data/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-brand-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Guest Reviews</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">What Our Guests Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: Math.floor(t.stars) }).map((_, i) => (
                  <i key={i} className="fas fa-star text-gold text-sm"></i>
                ))}
                {t.stars % 1 !== 0 && <i className="fas fa-star-half-stroke text-gold text-sm"></i>}
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">{t.initial}</div>
                <div>
                  <div className="font-semibold text-brand-gray dark:text-white text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
