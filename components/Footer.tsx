export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-white font-bold">R</span>
              <span className="font-serif text-2xl font-bold">Raiz Apartments</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Modern, stylish serviced apartments in the heart of Lagos — designed for comfort, security, and convenience.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon" aria-label="Twitter / X"><i className="fab fa-x-twitter"></i></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#about"      className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#apartments" className="hover:text-gold transition-colors">Apartments</a></li>
              <li><a href="#amenities"  className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#location"   className="hover:text-gold transition-colors">Location</a></li>
              <li><a href="#booking"    className="hover:text-gold transition-colors">Book a Stay</a></li>
            </ul>
          </div>

          {/* Apartments */}
          <div>
            <h4 className="font-semibold text-white mb-5 uppercase tracking-wider text-xs">Apartments</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#apartments" className="hover:text-gold transition-colors">Studio Apartment</a></li>
              <li><a href="#apartments" className="hover:text-gold transition-colors">One-Bedroom</a></li>
              <li><a href="#apartments" className="hover:text-gold transition-colors">Two-Bedroom</a></li>
              <li><a href="#booking"    className="hover:text-gold transition-colors">Make Enquiry</a></li>
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
