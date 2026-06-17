document.addEventListener("DOMContentLoaded", () => {
    function initPatrocinadores() {
        const el = document.querySelector(".patrocinadoresSwiper");
        if (!el || typeof Swiper === "undefined") return;
        new Swiper(".patrocinadoresSwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                },
            },
        });
    }

    // Patrocinadores está debajo del fold — diferir al tiempo de inactividad del navegador
    if (window.requestIdleCallback) {
        requestIdleCallback(initPatrocinadores, { timeout: 3000 });
    } else {
        setTimeout(initPatrocinadores, 300);
    }
});
