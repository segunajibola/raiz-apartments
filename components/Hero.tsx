export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-[#1a1208]">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
      </div>

      {/* Decorative gold circles */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 text-gold text-sm font-medium mb-8 fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
          Lagos&apos;s Premier Serviced Apartments
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 fade-up" style={{ animationDelay: '0.2s' }}>
          Modern Living in the<br />
          <span className="text-gold">Heart of Lagos</span>
        </h1>

        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed fade-up" style={{ animationDelay: '0.35s' }}>
          Discover stylish, fully-serviced apartments designed for comfort, security, and convenience — just 15 minutes from the international airport.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-gold/40 hover:-translate-y-1 text-base"
          >
            Book Now <i className="fas fa-calendar-check"></i>
          </a>
          <a
            href="#apartments"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 text-base"
          >
            View Apartments <i className="fas fa-building"></i>
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto fade-up" style={{ animationDelay: '0.65s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold font-serif">3</div>
            <div className="text-xs text-white/50 mt-1">Apartment Types</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl font-bold text-gold font-serif">15<span className="text-lg">m</span></div>
            <div className="text-xs text-white/50 mt-1">From Airport</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold font-serif">24/7</div>
            <div className="text-xs text-white/50 mt-1">Security</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs fade-up" style={{ animationDelay: '0.8s' }}>
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce"></div>
      </div>
    </section>
  )
}
