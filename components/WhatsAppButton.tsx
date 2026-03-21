export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348000000000?text=Hello%20Raiz%20Apartments%2C%20I%20would%20like%20to%20make%20a%20booking."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      <span className="absolute right-16 bg-green-600 text-white text-xs font-semibold py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}
