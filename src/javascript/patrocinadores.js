document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".patrocinadoresSwiper", {
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
});
