// ─── Amenities ────────────────────────────────────────────────────────────────
export const amenities = [
  {
    icon: 'fa-shield-halved',
    title: '24/7 Security',
    description: 'Round-the-clock manned security, CCTV surveillance, and secure access control systems for your peace of mind.',
  },
  {
    icon: 'fa-wifi',
    title: 'High-Speed Internet',
    description: 'Blazing-fast fibre broadband across all units. Stream, video-call, and work without interruption.',
  },
  {
    icon: 'fa-bolt',
    title: 'Uninterrupted Power',
    description: 'Reliable backup generators and inverter systems ensure you never experience a power outage.',
  },
  {
    icon: 'fa-square-parking',
    title: 'Secure Parking',
    description: 'Dedicated, well-lit parking spaces within the compound. Your vehicle is safe with us.',
  },
  {
    icon: 'fa-broom',
    title: 'Housekeeping',
    description: 'Professional cleaning and laundry services available. Come back to a fresh, immaculate apartment every day.',
  },
  {
    icon: 'fa-snowflake',
    title: 'Climate Control',
    description: "Split air-conditioning in every room so you can set the perfect temperature for a good night's rest.",
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    stars: 5,
    quote:
      'Absolutely loved my stay at Raiz. The apartment was spotless, the WiFi was fast, and the security gave me real peace of mind. Will definitely be back on my next Lagos trip!',
    name: 'Amaka O.',
    role: 'Business Traveller, Abuja',
    initial: 'A',
  },
  {
    stars: 5,
    quote:
      'The two-bedroom unit was perfect for our family visit. Spacious, modern, and felt like home. The proximity to the airport made our early flight stress-free. Highly recommended!',
    name: 'Tunde A.',
    role: 'Family Stay, UK',
    initial: 'T',
  },
  {
    stars: 4.5,
    quote:
      "Clean, comfortable, and great value. The team were responsive and helpful throughout. I've stayed at a lot of serviced apartments in Lagos — Raiz is top tier.",
    name: 'Chidi M.',
    role: 'Solo Traveller, Port Harcourt',
    initial: 'C',
  },
]

// ─── Contact Channels ─────────────────────────────────────────────────────────
export const contactChannels = [
  {
    icon: 'fa-phone-flip',
    title: 'Call Us',
    detail: '+234 800 000 0000',
    cta: 'Call Now',
    href: 'tel:+2348000000000',
    hoverIconClass: 'group-hover:bg-gold group-hover:text-white',
    external: false,
  },
  {
    icon: 'fa-envelope',
    title: 'Email Us',
    detail: 'hello@raizapartments.com',
    cta: 'Send Email',
    href: 'mailto:hello@raizapartments.com',
    hoverIconClass: 'group-hover:bg-gold group-hover:text-white',
    external: false,
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp',
    detail: 'Chat with us instantly',
    cta: 'Open WhatsApp',
    href: 'https://wa.me/2348000000000?text=Hello%20Raiz%20Apartments%2C%20I%20have%20an%20enquiry.',
    hoverIconClass: 'group-hover:bg-green-500 group-hover:text-white',
    external: true,
  },
]

// ─── Proximity / Location ─────────────────────────────────────────────────────
export const proximityItems = [
  {
    icon: 'fa-plane-departure',
    name: 'International Airport',
    time: '~15 minutes',
    detail: 'Murtala Muhammed International Airport',
  },
  {
    icon: 'fa-city',
    name: 'Lagos Island',
    time: '~20 minutes',
    detail: 'Business district, Marina, Eko Atlantic',
  },
  {
    icon: 'fa-umbrella-beach',
    name: 'Lekki',
    time: '~25 minutes',
    detail: 'Phase 1, Lekki Conservation Centre',
  },
  {
    icon: 'fa-shop',
    name: 'Shopping & Dining',
    time: 'Walking distance',
    detail: 'Supermarkets, restaurants, cafes nearby',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is from 2:00 PM and check-out is by 12:00 PM (noon). Early check-in or late check-out can be arranged for an additional fee, subject to availability.',
  },
  {
    q: 'Is the apartment self-contained / fully furnished?',
    a: 'Yes. All our units are fully furnished and equipped with a kitchen (or kitchenette), quality bedding, towels, crockery, cookware, smart TV, high-speed WiFi, and air conditioning.',
  },
  {
    q: 'How do I confirm my booking?',
    a: 'Submit the booking form above. Our team will contact you within 24 hours via email or WhatsApp to confirm availability and provide payment details. No upfront payment is required through the form.',
  },
  {
    q: 'Is there parking available?',
    a: 'Yes, secure on-site parking is available for all guests. It is complimentary for Two-Bedroom apartment guests and available at a daily rate for Studio and One-Bedroom guests.',
  },
  {
    q: 'Are pets allowed?',
    a: 'We currently do not accommodate pets in our apartments. Please contact us directly if you have specific requirements and we will do our best to assist.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Bookings cancelled 72 hours or more before check-in receive a full refund. Cancellations within 72 hours may incur a one-night charge. Please contact us for special circumstances.',
  },
]

// ─── Apartment Feature Pills ──────────────────────────────────────────────────
export const apartmentFeatures = {
  studio: [
    { icon: 'fa-wifi',          label: 'High-Speed WiFi' },
    { icon: 'fa-snowflake',     label: 'Air Conditioning' },
    { icon: 'fa-kitchen-set',   label: 'Kitchenette' },
    { icon: 'fa-tv',            label: 'Smart TV' },
    { icon: 'fa-bolt',          label: '24hr Power' },
    { icon: 'fa-shield-halved', label: 'Secure Entry' },
  ],
  oneBed: [
    { icon: 'fa-wifi',      label: 'High-Speed WiFi' },
    { icon: 'fa-snowflake', label: 'Air Conditioning' },
    { icon: 'fa-utensils',  label: 'Full Kitchen' },
    { icon: 'fa-tv',        label: 'Smart TV' },
    { icon: 'fa-couch',     label: 'Separate Lounge' },
    { icon: 'fa-bolt',      label: '24hr Power' },
  ],
  twoBed: [
    { icon: 'fa-wifi',      label: 'High-Speed WiFi' },
    { icon: 'fa-snowflake', label: '2× Air Conditioning' },
    { icon: 'fa-utensils',  label: 'Full Kitchen' },
    { icon: 'fa-bath',      label: '2× Bathrooms' },
    { icon: 'fa-car',       label: 'Parking Included' },
    { icon: 'fa-broom',     label: 'Daily Cleaning' },
  ],
}

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const quickLinks = [
  { href: '#about',      label: 'About Us' },
  { href: '#apartments', label: 'Apartments' },
  { href: '#amenities',  label: 'Amenities' },
  { href: '#location',   label: 'Location' },
  { href: '#booking',    label: 'Book a Stay' },
]

export const apartmentLinks = [
  { href: '#apartments', label: 'Studio Apartment' },
  { href: '#apartments', label: 'One-Bedroom' },
  { href: '#apartments', label: 'Two-Bedroom' },
  { href: '#booking',    label: 'Make Enquiry' },
]

export const socialLinks = [
  { href: '#', icon: 'fab fa-instagram',  label: 'Instagram' },
  { href: '#', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: '#', icon: 'fab fa-x-twitter',  label: 'Twitter / X' },
  { href: '#', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
]
