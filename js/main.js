/* Desert Elite Homes & Construction, Main JS */

/* ── Analytics (GA4) ─────────────────────────────────────
   Paste the Measurement ID below and analytics goes live on every
   page. It belongs to a property on the CLIENT's own Google account,
   with us added as a user, so their traffic history stays theirs.

   Left empty, nothing loads and nothing is sent: no script request,
   no cookies, no console errors. Safe to ship in this state.        */
const GA_MEASUREMENT_ID = ''; // e.g. 'G-XXXXXXXXXX'

window.dataLayer = window.dataLayer || [];
// Must be a classic function: gtag forwards its `arguments` object.
function gtag() { dataLayer.push(arguments); }

if (GA_MEASUREMENT_ID) {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(gaScript);

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

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

if (burger && mobileMenu) {
  // The burger doubles as the close control: it sits above the overlay, so a
  // second tap on the same spot that opened the menu is what people reach for.
  const setMenu = (open) => {
    mobileMenu.classList.toggle('open', open);
    // A closed menu is only transparent, not hidden, on a phone: without inert
    // its links stay in the tab order and keyboard users land on invisible
    // controls. The markup ships inert, so this holds before the first tap too.
    mobileMenu.toggleAttribute('inert', !open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    // Stop the page behind the overlay from scrolling under the menu.
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  // Leaving the mobile layout hides both the overlay and the burger, so an open
  // menu would strand the scroll lock on a page with no control left to clear
  // it. Close it on the way out. Matches the 768px breakpoint in the CSS.
  const mobileLayout = window.matchMedia('(max-width: 768px)');
  mobileLayout.addEventListener('change', (e) => { if (!e.matches) setMenu(false); });
  mobileMenu.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenu(false);
      burger.focus(); // focus would otherwise be stranded on the inert menu
    }
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

/* ── Gallery Filter + Lightbox ───────────────────────────── */
const galleryItems = document.querySelectorAll('.gallery-item');
const filterBtns = document.querySelectorAll('.filter-btn');

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
        // A quote request is the only conversion that matters here, so
        // record it as one. Pageviews say who arrived; this says who asked.
        gtag('event', 'generate_lead', { method: 'contact_form' });

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
if (galleryItems.length) {
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
  galleryItems.forEach(item => {
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

/* ── Footer Year ─────────────────────────────────────────
   Keeps the copyright line from going stale. Shows the launch year
   on its own during 2026, then a range (2026-2027 and onward), which
   stays accurate about first publication instead of silently claiming
   the site was published this year.                                  */
const footerYear = document.querySelector('.footer__year');
if (footerYear) {
  const LAUNCH_YEAR = 2026;
  const currentYear = new Date().getFullYear();
  footerYear.textContent =
    currentYear > LAUNCH_YEAR ? `${LAUNCH_YEAR}-${currentYear}` : `${LAUNCH_YEAR}`;
}
