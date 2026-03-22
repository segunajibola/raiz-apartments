import Image from 'next/image'
import { quickLinks, apartmentLinks, socialLinks } from '@/data/data'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/logo.jpg" alt="Raiz Apartments" width={36} height={36} className="object-cover w-full h-full" />
              </span>
              <span className="font-serif text-2xl font-bold">Raiz Apartments</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Modern, stylish serviced apartments in the heart of Lagos — designed for comfort, security, and convenience.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="social-icon" aria-label={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/50">
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Apartments */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs">Apartments</h4>
            <ul className="space-y-3 text-sm text-white/50">
              {apartmentLinks.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; <span id="footer-year">{new Date().getFullYear()}</span> Raiz Apartments. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
