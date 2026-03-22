import { amenities } from '@/data/data'

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-4">World-Class Amenities</h2>
          <p className="text-white/50 max-w-xl mx-auto">Every convenience, thoughtfully provided so you can relax and enjoy your stay.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {amenities.map((item) => (
            <div key={item.title} className="amenity-card group">
              <div className="amenity-icon"><i className={`fas ${item.icon}`}></i></div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
