export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-lightgray dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-6 leading-tight">
              A Home Away<br />From Home
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              Raiz Apartments was born from a simple idea: every guest deserves more than just a room — they deserve an experience. Nestled in the heart of Lagos, our collection of thoughtfully designed apartments blends the warmth of home with the luxury of a boutique hotel.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Whether you&apos;re a business traveller looking for productivity or a family seeking comfort, Raiz is your sanctuary. We obsess over every detail — from premium linen to round-the-clock security — so you can focus on what matters most.
            </p>

            {/* Key points */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-gray dark:text-gray-200">
                <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-gold text-xs"></i>
                </span>
                Premium comfort with hotel-grade furnishings
              </li>
              <li className="flex items-center gap-3 text-brand-gray dark:text-gray-200">
                <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-gold text-xs"></i>
                </span>
                State-of-the-art security systems &amp; on-site personnel
              </li>
              <li className="flex items-center gap-3 text-brand-gray dark:text-gray-200">
                <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-gold text-xs"></i>
                </span>
                Prime location — minutes from business hubs &amp; the airport
              </li>
            </ul>
          </div>

          {/* Image / Visual card */}
          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-dark to-brand-gray aspect-[4/5]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <div className="w-20 h-20 rounded-2xl bg-gold/20 flex items-center justify-center">
                  <i className="fas fa-building-columns text-gold text-3xl"></i>
                </div>
                <p className="text-white/60 text-center text-sm italic">&ldquo;A sanctuary of comfort in the heart of Lagos&rdquo;</p>
                {/* Replace this div with an actual <img> tag in production */}
                <p className="text-white/30 text-xs text-center mt-4">[ Replace with your property photo ]</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-gold text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-2xl font-bold font-serif">5★</div>
              <div className="text-xs opacity-80">Guest Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
