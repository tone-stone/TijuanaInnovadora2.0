(function () {
    var initialized = false;

    function init() {
        if (initialized) return;
        initialized = true;

        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('[data-aos]').forEach(function (el) {
                el.classList.add('aos-animate');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('[data-aos]').forEach(function (el) {
            var delay = el.getAttribute('data-aos-delay');
            if (delay) el.style.transitionDelay = delay + 'ms';
            observer.observe(el);
        });
    }

    // Backward-compatible AOS.init() shim
    window.AOS = { init: init };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
