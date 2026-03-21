export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand-darker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-gray dark:text-white mt-3 mb-4">We&apos;re Here for You</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Have a question or want to discuss a longer stay? Reach out through any of our channels — we respond fast.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto reveal">
          {/* Phone */}
          <a href="tel:+2348000000000" className="contact-card group">
            <div className="contact-icon group-hover:bg-gold group-hover:text-white transition-colors duration-300">
              <i className="fas fa-phone-flip"></i>
            </div>
            <h3 className="font-semibold text-brand-gray dark:text-white mb-1">Call Us</h3>
            <p className="text-gray-400 text-sm">+234 800 000 0000</p>
            <span className="text-gold text-xs font-semibold mt-2 inline-block group-hover:underline">Call Now →</span>
          </a>

          {/* Email */}
          <a href="mailto:hello@raizapartments.com" className="contact-card group">
            <div className="contact-icon group-hover:bg-gold group-hover:text-white transition-colors duration-300">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="font-semibold text-brand-gray dark:text-white mb-1">Email Us</h3>
            <p className="text-gray-400 text-sm">hello@raizapartments.com</p>
            <span className="text-gold text-xs font-semibold mt-2 inline-block group-hover:underline">Send Email →</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348000000000?text=Hello%20Raiz%20Apartments%2C%20I%20have%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group"
          >
            <div className="contact-icon group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3 className="font-semibold text-brand-gray dark:text-white mb-1">WhatsApp</h3>
            <p className="text-gray-400 text-sm">Chat with us instantly</p>
            <span className="text-gold text-xs font-semibold mt-2 inline-block group-hover:underline">Open WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
