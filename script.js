'use strict';

/* ============================================================================
   PORTFOLIO SCRIPT
   Organized as small independent modules, each initialized once on
   DOMContentLoaded. No external libraries, no build step.
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initSmoothScroll();
  initTypingEffect(prefersReducedMotion);
  initScrollReveal(prefersReducedMotion);
  initSkillBars(prefersReducedMotion);
  initAnimatedCounters(prefersReducedMotion);
  initProjectFilter();
  initExperienceTabs();
  initContactForm();
  initBackToTop();
  initLazyImages();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ----------------------------------------------------------------------------
   THEME TOGGLE — respects saved preference, falls back to system preference.
   ---------------------------------------------------------------------------- */
function initThemeToggle() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'portfolio-theme';

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved || (systemPrefersDark ? 'dark' : 'dark'); // site defaults to dark
  root.setAttribute('data-theme', initial);

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}

/* ----------------------------------------------------------------------------
   MOBILE NAVIGATION
   ---------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
}

/* ----------------------------------------------------------------------------
   SMOOTH SCROLL for in-page anchor links (native CSS handles most of this;
   this adds an offset correction for the fixed navbar).
   ---------------------------------------------------------------------------- */
function initSmoothScroll() {
  const navHeight = document.querySelector('.navbar').offsetHeight;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

/* ----------------------------------------------------------------------------
   SCROLL SPY — highlights the active nav link based on section in view.
   ---------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length) return;

  const linkFor = (id) => document.querySelector(`.nav-link[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ----------------------------------------------------------------------------
   TYPING EFFECT — cycles through role/focus phrases in the hero.
   ---------------------------------------------------------------------------- */
function initTypingEffect(reduced) {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'Structural Design Engineer',
    'Geotechnical Analyst',
    'Applied Research Enthusiast',
    'Bridging Structures & Ground Systems',
  ];

  if (reduced) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1600;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
}

/* ----------------------------------------------------------------------------
   SCROLL REVEAL — fade/slide-up elements into view using IntersectionObserver.
   ---------------------------------------------------------------------------- */
function initScrollReveal(reduced) {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (reduced) {
    targets.forEach((t) => t.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((t) => observer.observe(t));
}

/* ----------------------------------------------------------------------------
   SKILL PROGRESS BARS — animate width when scrolled into view.
   ---------------------------------------------------------------------------- */
function initSkillBars(reduced) {
  const bars = document.querySelectorAll('.progress-fill');
  if (!bars.length) return;

  if (reduced) {
    bars.forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = `${bar.dataset.width}%`;
          obs.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ----------------------------------------------------------------------------
   ANIMATED STAT COUNTERS
   ---------------------------------------------------------------------------- */
function initAnimatedCounters(reduced) {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || '';

    if (reduced) {
      el.textContent = target + suffix;
      return;
    }

    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/* ----------------------------------------------------------------------------
   PROJECT FILTERING
   ---------------------------------------------------------------------------- */
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
}

/* ----------------------------------------------------------------------------
   EXPERIENCE TABS
   ---------------------------------------------------------------------------- */
function initExperienceTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.querySelector(`.tab-panel[data-panel="${tab.dataset.tab}"]`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ----------------------------------------------------------------------------
   CONTACT FORM — client-side validation, no backend. Shows a success
   message and offers a mailto: fallback.
   ---------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const fields = {
    name: { el: document.getElementById('name'), error: document.getElementById('nameError') },
    email: { el: document.getElementById('email'), error: document.getElementById('emailError') },
    subject: { el: document.getElementById('subject'), error: document.getElementById('subjectError') },
    message: { el: document.getElementById('message'), error: document.getElementById('messageError') },
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateField(key) {
    const { el, error } = fields[key];
    const value = el.value.trim();
    let message = '';

    if (!value) {
      message = 'This field is required.';
    } else if (key === 'email' && !emailPattern.test(value)) {
      message = 'Enter a valid email address.';
    } else if (key === 'message' && value.length < 10) {
      message = 'Message should be at least 10 characters.';
    }

    error.textContent = message;
    el.setAttribute('aria-invalid', message ? 'true' : 'false');
    return !message;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].el.addEventListener('blur', () => validateField(key));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const results = Object.keys(fields).map(validateField);
    const allValid = results.every(Boolean);

    if (!allValid) {
      status.className = 'form-status show error';
      status.textContent = 'Please fix the highlighted fields before sending.';
      return;
    }

    // No backend is connected — provide a mailto fallback and confirm locally.
    const name = fields.name.el.value.trim();
    const email = fields.email.el.value.trim();
    const subject = fields.subject.el.value.trim();
    const message = fields.message.el.value.trim();

    const mailtoLink = `mailto:[YOUR EMAIL]?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;

    status.className = 'form-status show success';
    status.innerHTML = `Thanks, ${escapeHtml(name)} — your message is ready to send. If your email client didn't open automatically, <a href="${mailtoLink}" style="text-decoration:underline;">click here</a>.`;

    window.location.href = mailtoLink;
    form.reset();
  });

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

/* ----------------------------------------------------------------------------
   BACK TO TOP BUTTON
   ---------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 480);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ----------------------------------------------------------------------------
   LAZY LOADING — native loading="lazy" is set in markup; this is a small
   progressive-enhancement fallback for older browsers using data-src.
   ---------------------------------------------------------------------------- */
function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // native support present

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => observer.observe(img));
}
