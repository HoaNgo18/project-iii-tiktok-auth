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
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ===== Magnetic button effect ===== */
  function initMagneticButtons() {
    var buttons = document.querySelectorAll('.btn-magnetic');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      function onMove(e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        var strength = 0.3;
        var maxMove = 8;

        var moveX = Math.max(-maxMove, Math.min(maxMove, x * strength));
        var moveY = Math.max(-maxMove, Math.min(maxMove, y * strength));

        btn.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
      }

      function onLeave() {
        btn.style.transform = 'translate(0, 0)';
      }

      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
    });
  }

  /* ===== Smooth scroll for all internal anchor links ===== */
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
      initMagneticButtons();
      initSmoothScroll();
    });
  } else {
    initHeroEntrance();
    initScrollReveal();
    initMagneticButtons();
    initSmoothScroll();
  }
})();
