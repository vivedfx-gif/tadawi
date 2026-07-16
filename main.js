/* ============================================
   Tadawi Clinic - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initFAQ();
  initStickyCTA();
  initSmoothScroll();
  initBookingForm();
});

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
      header.classList.remove('header-transparent');
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('header-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * eased);

    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('active');
        const answer = other.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = '0';
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });
}

/* ============================================
   STICKY CTA
   ============================================ */
function initStickyCTA() {
  const stickyCta = document.getElementById('stickyCta');
  if (!stickyCta) return;

  const hero = document.getElementById('hero');
  const threshold = hero ? hero.offsetHeight + 200 : 400;

  window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
      stickyCta.classList.add('visible');
    } else {
      stickyCta.classList.remove('visible');
    }
  }, { passive: true });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   BOOKING FORM & WHATSAPP INTEGRATION
   ============================================ */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const formData = {
      name: document.getElementById('fullName')?.value || '',
      phone: document.getElementById('phone')?.value || '',
      age: document.getElementById('age')?.value || '',
      gender: document.getElementById('gender')?.value || '',
      condition: document.getElementById('condition')?.value || '',
      painArea: document.getElementById('painArea')?.value || '',
      service: document.getElementById('service')?.value || '',
      doctor: document.getElementById('doctor')?.value || '',
      date: document.getElementById('date')?.value || '',
      time: document.getElementById('time')?.value || '',
      firstVisit: document.getElementById('firstVisit')?.value || '',
      notes: document.getElementById('notes')?.value || ''
    };

    // Validate required fields
    if (!formData.name || !formData.phone) {
      showFormMessage('Please fill in at least your name and phone number.', 'error');
      return;
    }

    // Build WhatsApp message
    const message = buildWhatsAppMessage(formData);
    const whatsappNumber = '20XXXXXXXXXX';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success
    showFormMessage('Redirecting to WhatsApp... Please send the message to complete your booking.', 'success');

    // Optionally reset form after a delay
    setTimeout(() => {
      form.reset();
    }, 2000);
  });
}

function buildWhatsAppMessage(data) {
  let message = '🏥 *New Appointment Request*\n';
  message += '━━━━━━━━━━━━━━━━━━━\n\n';

  if (data.name) message += `👤 *Name:* ${data.name}\n`;
  if (data.phone) message += `📱 *Phone:* ${data.phone}\n`;
  if (data.age) message += `🎂 *Age:* ${data.age}\n`;
  if (data.gender) message += `⚧ *Gender:* ${data.gender}\n`;
  if (data.condition) message += `🩺 *Condition:* ${data.condition}\n`;
  if (data.painArea) message += `📍 *Pain Area:* ${data.painArea}\n`;
  if (data.service) message += `💊 *Preferred Service:* ${data.service}\n`;
  if (data.doctor) message += `👨‍⚕️ *Preferred Doctor:* ${data.doctor}\n`;
  if (data.date) message += `📅 *Preferred Date:* ${data.date}\n`;
  if (data.time) message += `⏰ *Preferred Time:* ${data.time}\n`;
  if (data.firstVisit) message += `🆕 *First Visit:* ${data.firstVisit}\n`;
  if (data.notes) message += `📝 *Notes:* ${data.notes}\n`;

  message += '\n━━━━━━━━━━━━━━━━━━━';
  message += '\nSent from Tadawi Clinic Website';

  return message;
}

function showFormMessage(text, type) {
  // Remove existing messages
  const existing = document.querySelector('.form-message');
  if (existing) existing.remove();

  const message = document.createElement('div');
  message.className = `form-message form-message-${type}`;
  message.textContent = text;
  message.style.cssText = `
    padding: 1rem 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    animation: fadeIn 0.3s ease;
    ${type === 'success'
      ? 'background: #D1FAE5; color: #065F46; border: 1px solid #A7F3D0;'
      : 'background: #FEE2E2; color: #991B1B; border: 1px solid #FECACA;'
    }
  `;

  const form = document.getElementById('bookingForm');
  if (form) {
    form.appendChild(message);
    setTimeout(() => message.remove(), 5000);
  }
}

/* ============================================
   GALLERY LIGHTBOX (simple)
   ============================================ */
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('expanded');
    });
  });
}

/* ============================================
   SERVICE PAGE - RELATED SERVICES
   ============================================ */
function initServicePage() {
  // Highlight current service in sidebar if present
  const currentPath = window.location.pathname;
  document.querySelectorAll('.service-nav-link').forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   PRELOADER (optional)
   ============================================ */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }
});

/* ============================================
   ADD CSS KEYFRAME ANIMATIONS
   ============================================ */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
