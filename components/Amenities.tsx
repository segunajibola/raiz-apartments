export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background texture */}
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
          {/* Security */}
          <div className="amenity-card group">
            <div className="amenity-icon"><i className="fas fa-shield-halved"></i></div>
            <h3 className="text-white font-semibold text-lg mb-2">24/7 Security</h3>
            <p className="text-white/50 text-sm leading-relaxed">Round-the-clock manned security, CCTV surveillance, and secure access control systems for your peace of mind.</p>
          </div>
          {/* Internet */}
          <div className="amenity-card group">
            <div className="amenity-icon"><i className="fas fa-wifi"></i></div>
            <h3 className="text-white font-semibold text-lg mb-2">High-Speed Internet</h3>
            <p className="text-white/50 text-sm leading-relaxed">Blazing-fast fibre broadband across all units. Stream, video-call, and work without interruption.</p>
          </div>
          {/* Power */}
          <div className="amenity-card group">
            <div className="amenity-icon"><i className="fas fa-bolt"></i></div>
            <h3 className="text-white font-semibold text-lg mb-2">Uninterrupted Power</h3>
            <p className="text-white/50 text-sm leading-relaxed">Reliable backup generators and inverter systems ensure you never experience a power outage.</p>
          </div>
          {/* Parking */}
          <div className="amenity-card group">
            <div className="amenity-icon"><i className="fas fa-square-parking"></i></div>
            <h3 className="text-white font-semibold text-lg mb-2">Secure Parking</h3>
            <p className="text-white/50 text-sm leading-relaxed">Dedicated, well-lit parking spaces within the compound. Your vehicle is safe with us.</p>
          </div>
          {/* Cleaning */}
          <div className="amenity-card group">
            <div className="amenity-icon"><i className="fas fa-broom"></i></div>
            <h3 className="text-white font-semibold text-lg mb-2">Housekeeping</h3>
            <p className="text-white/50 text-sm leading-relaxed">Professional cleaning and laundry services available. Come back to a fresh, immaculate apartment every day.</p>
          </div>
          {/* AC */}
          <div className="amenity-card group">
            <div className="amenity-icon"><i className="fas fa-snowflake"></i></div>
            <h3 className="text-white font-semibold text-lg mb-2">Climate Control</h3>
            <p className="text-white/50 text-sm leading-relaxed">Split air-conditioning in every room so you can set the perfect temperature for a good night&apos;s rest.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
