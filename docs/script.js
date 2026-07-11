/* ============================================================
   Samuel Nelson — Portfolio JavaScript
   Features: dark mode, mobile nav, scroll animations,
             active nav link tracking, nav shadow on scroll
   ============================================================ */

'use strict';

/* ============================
   HELPERS
============================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================
   DARK / LIGHT MODE TOGGLE
============================ */
(function initTheme() {
  const toggle   = $('#theme-toggle');
  const iconEl   = toggle.querySelector('.theme-toggle__icon');
  const html     = document.documentElement;

  // Load saved preference, default to dark
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  iconEl.textContent = saved === 'dark' ? '🌙' : '☀️';
  toggle.setAttribute('aria-label', saved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

  toggle.addEventListener('click', () => {
    const current  = html.getAttribute('data-theme');
    const next     = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    iconEl.textContent = next === 'dark' ? '🌙' : '☀️';
    toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    localStorage.setItem('theme', next);
  });
})();

/* ============================
   MOBILE NAV TOGGLE
============================ */
(function initMobileNav() {
  const hamburger = $('#nav-hamburger');
  const navLinks  = $('#nav-links');

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on nav link click
  $$('.nav__link', navLinks).forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
  });

  // Close when clicking outside the nav
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav') && navLinks.classList.contains('open')) closeMenu();
  });
})();

/* ============================
   NAV SHADOW ON SCROLL
============================ */
(function initNavShadow() {
  const nav = $('.nav');
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();

/* ============================
   SCROLL-TRIGGERED FADE-IN ANIMATIONS
============================ */
(function initScrollAnimations() {
  const elements = $$('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger elements that are siblings (e.g., cards in a grid)
      const siblings = Array.from(entry.target.parentElement?.children ?? []);
      const idx      = siblings.indexOf(entry.target);
      // Cap stagger at 400 ms, 80 ms per sibling
      const delay    = Math.min(idx * 80, 400);

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -48px 0px',
  });

  elements.forEach(el => observer.observe(el));
})();

/* ============================
   ACTIVE NAV LINK ON SCROLL
============================ */
(function initActiveNav() {
  const sections = $$('section[id]');
  const links    = $$('.nav__link');
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    threshold: 0.25,
    rootMargin: `-${68}px 0px 0px 0px`,
  });

  sections.forEach(s => observer.observe(s));
})();

/* ============================
   SMOOTH SCROLL POLYFILL
   (handles browsers that don't natively support scroll-behavior)
============================ */
(function initSmoothScroll() {
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.getElementById(anchor.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 68;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
