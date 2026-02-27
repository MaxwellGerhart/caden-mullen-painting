/* ==============================================
   CADEN MULLEN PAINTING — script.js
   ============================================== */

// --- Mobile nav toggle ---
(function () {
    const toggle = document.getElementById('nav-toggle');
    const nav    = document.getElementById('main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });

    // Close nav when a link is tapped
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', false);
        });
    });
})();


// --- Scroll-reveal for .reveal elements ---
(function () {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
        // Pause the CSS animation until element is visible
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
})();


// --- Smooth scroll for hash links ---
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// --- Contact form ---
(function () {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        var name    = (document.getElementById('name')    || {}).value || '';
        var email   = (document.getElementById('email')   || {}).value || '';
        var message = (document.getElementById('message') || {}).value || '';

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return;
        }

        var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }

        // If no real form action is set, show confirmation and reset
        if (!form.action || form.action.indexOf('your-form-id') !== -1) {
            e.preventDefault();
            alert('Thank you, ' + name + '. We\u2019ll be in touch soon.');
            form.reset();
        }
    });
})();

