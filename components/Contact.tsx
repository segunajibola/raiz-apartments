import { contactChannels } from '@/data/data'

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
          {contactChannels.map((ch) => (
            <a
              key={ch.title}
              href={ch.href}
              className="contact-card group"
              {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className={`contact-icon ${ch.hoverIconClass} transition-colors duration-300`}>
                <i className={ch.icon.startsWith('fab') ? ch.icon : `fas ${ch.icon}`}></i>
              </div>
              <h3 className="font-semibold text-brand-gray dark:text-white mb-1">{ch.title}</h3>
              <p className="text-gray-400 text-sm">{ch.detail}</p>
              <span className="text-gold text-xs font-semibold mt-2 inline-block group-hover:underline">{ch.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
