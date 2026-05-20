(function () {
  'use strict';

  /* ===== Hero entrance animation ===== */
  function initHeroEntrance() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add('entered');
      });
    });
  }

  /* ===== Scroll reveal via Intersection Observer ===== */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ===== Smooth scroll for internal anchor links ===== */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      var targetId = link.getAttribute('href');
      var target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  /* ===== Init ===== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initHeroEntrance();
      initScrollReveal();
      initSmoothScroll();
    });
  } else {
    initHeroEntrance();
    initScrollReveal();
    initSmoothScroll();
  }
})();
