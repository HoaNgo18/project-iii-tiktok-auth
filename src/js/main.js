(function () {
  'use strict';

  /* ===== Navbar scroll effect ===== */
  function initNavScroll() {
    var nav = document.querySelector('nav');
    if (!nav) return;

    var scrollThreshold = 10;
    var ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > scrollThreshold) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ===== Theme Toggle ===== */
  function initThemeToggle() {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    var stored = localStorage.getItem('threads_city_theme');
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('threads_city_theme', next);
    });
  }

  /* ===== Init ===== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initNavScroll();
      initThemeToggle();
    });
  } else {
    initNavScroll();
    initThemeToggle();
  }
})();
