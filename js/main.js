/* Desert Elite Homes & Construction, Main JS */

/* ── Sticky Nav ─────────────────────────────────────────── */
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Back to Top ─────────────────────────────────────────── */
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const toggleBackToTop = () => backToTop.classList.toggle('visible', window.scrollY > 600);
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Mobile Menu ─────────────────────────────────────────── */
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile');
const mobileClose = document.querySelector('.nav__mobile-close');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (mobileClose) mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

/* ── Scroll Reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Counter Animation ───────────────────────────────────── */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = ease * target;
    el.textContent = isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

/* ── Gallery Filter ──────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.opacity = show ? '1' : '0.15';
      item.style.pointerEvents = show ? 'auto' : 'none';
      item.style.transform = show ? 'scale(1)' : 'scale(0.97)';
      item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    });
  });
});

/* ── Contact Form (Netlify Forms) ────────────────────────── */
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(contactForm)).toString(),
      });

      if (res.ok) {
        contactForm.reset();
        // Swap the form out for the success panel (role="status" announces it)
        const success = document.querySelector('#formSuccess');
        contactForm.hidden = true;
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        throw new Error('network');
      }
    } catch {
      btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed: Please Try Again';
      btn.style.background = '#b94040';
      btn.disabled = false;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.style.background = '';
      }, 4000);
    }
  });
}

/* ── Gallery Lightbox ────────────────────────────────────── */
const galleryPhotoItems = document.querySelectorAll('.gallery-item');
if (galleryPhotoItems.length) {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = `
    <button class="lightbox__close" aria-label="Close">&times;</button>
    <img class="lightbox__img" src="" alt="">
    <div class="lightbox__caption"></div>
  `;
  document.body.appendChild(overlay);

  const lbImg = overlay.querySelector('.lightbox__img');
  const lbCaption = overlay.querySelector('.lightbox__caption');
  const lbClose = overlay.querySelector('.lightbox__close');
  let lastFocused = null;

  function openLightbox(src, alt, caption, trigger) {
    lastFocused = trigger || null;
    lbImg.src = src;
    lbImg.alt = alt;
    lbCaption.textContent = caption;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus(); // move focus into the dialog for keyboard users
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus(); // return focus to the trigger
  }

  // Gallery items are <div>s, so make them behave like buttons for the keyboard
  galleryPhotoItems.forEach(item => {
    const img = item.querySelector('.gallery-item__photo');
    if (!img) return;
    const title = item.querySelector('.gallery-item__hover-title');
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', (title ? title.textContent + ', ' : '') + 'view larger image');

    const open = () => openLightbox(img.src, img.alt, title ? title.textContent : '', item);
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox(); });
}

/* ── Active Nav Link ─────────────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
