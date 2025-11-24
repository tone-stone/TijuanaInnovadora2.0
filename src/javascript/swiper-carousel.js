document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".impactSwiper");
    if (el && typeof Swiper !== "undefined") {
        new Swiper(".impactSwiper", {
            slidesPerView: 1.15,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});
