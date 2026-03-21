/* =====================================================================
   Raiz Apartments — Main JavaScript
   Handles: dark mode, navbar scroll, mobile menu, apartment tabs,
            scroll-reveal animations, booking form, FAQ accordion,
            footer year, date validation, WhatsApp pre-fill.
   ===================================================================== */

/* ── Dark Mode ───────────────────────────────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');
const html        = document.documentElement;

// Load saved preference (defaults to light)
const savedTheme = localStorage.getItem('raiz-theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.classList.contains('dark') ? 'dark' : 'light';
  const next    = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('raiz-theme', next);
});

function applyTheme(theme) {
  if (theme === 'dark') {
    html.classList.add('dark');
    themeIcon.className = 'fas fa-sun text-sm';
  } else {
    html.classList.remove('dark');
    themeIcon.className = 'fas fa-moon text-sm';
  }
}

/* ── Navbar Scroll Behaviour ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ── Mobile Menu ─────────────────────────────────────────────────────── */
const menuToggle = document.getElementById('menu-toggle');
const menuIcon   = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    mobileMenu.classList.add('hidden');
    menuIcon.className = 'fas fa-bars text-sm';
  } else {
    mobileMenu.classList.remove('hidden');
    menuIcon.className = 'fas fa-xmark text-sm';
  }
});

// Close menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.className = 'fas fa-bars text-sm';
  });
});

/* ── Scroll-Reveal (Intersection Observer) ───────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Apartment Tabs ──────────────────────────────────────────────────── */
/**
 * @param {'studio'|'one-bed'|'two-bed'} type
 */
window.switchApt = function(type) {
  // Hide all panels
  document.querySelectorAll('.apt-panel').forEach(panel => {
    panel.classList.add('hidden');
  });

  // Deactivate all tabs
  document.querySelectorAll('.apt-tab').forEach(tab => {
    tab.classList.remove('active-tab');
  });

  // Show selected panel + activate tab
  const panel = document.getElementById(`apt-${type}`);
  const tab   = document.getElementById(`tab-${type}`);

  if (panel) {
    panel.classList.remove('hidden');
    // Trigger reveal animation
    panel.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      requestAnimationFrame(() => {
        setTimeout(() => el.classList.add('visible'), 50);
      });
    });
  }
  if (tab) tab.classList.add('active-tab');
};

// Initialise first tab on load
switchApt('studio');

/* ── Date Validation & Stay Duration Display ─────────────────────────── */
const checkinInput     = document.getElementById('checkin-date');
const checkoutInput    = document.getElementById('checkout-date');
const durationDisplay  = document.getElementById('duration-display');
const durationText     = document.getElementById('duration-text');

// Minimum check-in: today
const today = new Date();
today.setHours(0, 0, 0, 0);
const todayStr = today.toISOString().split('T')[0];
checkinInput.setAttribute('min', todayStr);

checkinInput.addEventListener('change', () => {
  // Checkout must be after check-in
  const minCheckout = new Date(checkinInput.value);
  minCheckout.setDate(minCheckout.getDate() + 1);
  checkoutInput.setAttribute('min', minCheckout.toISOString().split('T')[0]);

  // Clear checkout if it's now before check-in
  if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
    checkoutInput.value = '';
    hideDuration();
  } else {
    updateDuration();
  }
});

checkoutInput.addEventListener('change', updateDuration);

function updateDuration() {
  if (!checkinInput.value || !checkoutInput.value) return hideDuration();

  const checkin  = new Date(checkinInput.value);
  const checkout = new Date(checkoutInput.value);
  const nights   = Math.round((checkout - checkin) / (1000 * 60 * 60 * 24));

  if (nights > 0) {
    durationText.textContent = `${nights} night${nights > 1 ? 's' : ''} selected  ·  ${formatDate(checkin)} → ${formatDate(checkout)}`;
    durationDisplay.classList.remove('hidden');
    durationDisplay.classList.add('flex');
  } else {
    hideDuration();
  }
}

function hideDuration() {
  durationDisplay.classList.add('hidden');
  durationDisplay.classList.remove('flex');
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ── Booking Form Submission ─────────────────────────────────────────── */
window.handleBooking = function(event) {
  event.preventDefault();

  const form       = document.getElementById('booking-form');
  const submitBtn  = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitIcon = document.getElementById('submit-icon');
  const submitSpinner = document.getElementById('submit-spinner');

  // Basic validation
  const checkin  = checkinInput.value;
  const checkout = checkoutInput.value;
  if (checkin && checkout && new Date(checkout) <= new Date(checkin)) {
    showFormError('Check-out date must be after check-in date.');
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitText.textContent = 'Sending…';
  submitIcon.classList.add('hidden');
  submitSpinner.classList.remove('hidden');

  // Collect form data
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  payload.timestamp = new Date().toISOString();

  /*
   * ─────────────────────────────────────────────────────────────────
   * BACKEND INTEGRATION NOTE:
   * Replace the setTimeout block below with an actual API call.
   *
   * Option A — Firebase Firestore:
   *   import { collection, addDoc } from 'firebase/firestore';
   *   await addDoc(collection(db, 'bookings'), payload);
   *
   * Option B — REST API:
   *   const res = await fetch('/api/bookings', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify(payload),
   *   });
   *
   * Option C — EmailJS (no server needed):
   *   await emailjs.send('service_id', 'template_id', payload);
   * ─────────────────────────────────────────────────────────────────
   */
  setTimeout(() => {
    // Simulate successful submission
    console.log('Booking payload:', payload);

    // Show success message
    form.classList.add('hidden');
    document.getElementById('booking-success').classList.remove('hidden');

    // Reset loading state
    submitBtn.disabled = false;
    submitText.textContent = 'Request Booking';
    submitIcon.classList.remove('hidden');
    submitSpinner.classList.add('hidden');
  }, 1800);
};

window.resetBookingForm = function() {
  const form = document.getElementById('booking-form');
  form.reset();
  form.classList.remove('hidden');
  document.getElementById('booking-success').classList.add('hidden');
  hideDuration();
};

function showFormError(msg) {
  // Simple inline toast – replace with your preferred notification library
  const el = document.createElement('div');
  el.className = 'fixed top-24 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-5 py-3 rounded-full shadow-xl z-50 transition-opacity duration-500';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 500); }, 3000);
}

/* ── FAQ Accordion ───────────────────────────────────────────────────── */
const faqs = [
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
];

const faqContainer = document.getElementById('faq-container');

faqs.forEach((faq, i) => {
  const item = document.createElement('div');
  item.className = 'faq-item';

  item.innerHTML = `
    <div class="faq-question" aria-expanded="false" role="button" tabindex="0">
      <span>${faq.q}</span>
      <i class="fas fa-chevron-down faq-icon"></i>
    </div>
    <div class="faq-answer" role="region">
      <p>${faq.a}</p>
    </div>
  `;

  const question = item.querySelector('.faq-question');
  const answer   = item.querySelector('.faq-answer');

  function toggleFaq() {
    const isOpen = item.classList.contains('open');

    // Close all others
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-answer').classList.remove('open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  }

  question.addEventListener('click', toggleFaq);
  question.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(); } });

  faqContainer.appendChild(item);

  // Open first item by default
  if (i === 0) setTimeout(toggleFaq, 400);
});

/* ── Footer Year ─────────────────────────────────────────────────────── */
document.getElementById('footer-year').textContent = new Date().getFullYear();

/* ── Active Nav Link Highlight on Scroll ─────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.style.color = '#C9A84C';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── Smooth anchor scroll with navbar offset ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});
