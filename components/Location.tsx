export default function Location() {
  return (
    <section id="location" className="py-24 bg-white dark:bg-brand-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Where We Are</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">Perfectly Located</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Raiz Apartments sits at the crossroads of convenience, putting Lagos&apos;s key destinations right at your doorstep.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Map */}
          <div className="lg:col-span-3 reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 aspect-video">
              {/*
                Replace the iframe src with your actual Google Maps embed URL.
                Go to Google Maps → search your address → Share → Embed a map → copy the src.
              */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.5!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raiz Apartments Location Map"
              ></iframe>
            </div>
          </div>

          {/* Proximity cards */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="proximity-card">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-plane-departure text-gold text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white">International Airport</div>
                <div className="text-gold text-sm font-bold mt-0.5">~15 minutes</div>
                <div className="text-gray-400 text-xs mt-1">Murtala Muhammed International Airport</div>
              </div>
            </div>

            <div className="proximity-card">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-city text-gold text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white">Lagos Island</div>
                <div className="text-gold text-sm font-bold mt-0.5">~20 minutes</div>
                <div className="text-gray-400 text-xs mt-1">Business district, Marina, Eko Atlantic</div>
              </div>
            </div>

            <div className="proximity-card">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-umbrella-beach text-gold text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white">Lekki</div>
                <div className="text-gold text-sm font-bold mt-0.5">~25 minutes</div>
                <div className="text-gray-400 text-xs mt-1">Phase 1, Lekki Conservation Centre</div>
              </div>
            </div>

            <div className="proximity-card">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-shop text-gold text-xl"></i>
              </div>
              <div>
                <div className="font-semibold text-brand-gray dark:text-white">Shopping &amp; Dining</div>
                <div className="text-gold text-sm font-bold mt-0.5">Walking distance</div>
                <div className="text-gray-400 text-xs mt-1">Supermarkets, restaurants, cafes nearby</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Lagos,Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-white font-semibold px-5 py-3 rounded-full text-sm transition-all duration-300 mt-2"
            >
              Get Directions <i className="fas fa-external-link-alt text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
