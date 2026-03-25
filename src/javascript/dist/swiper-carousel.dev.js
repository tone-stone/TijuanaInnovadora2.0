"use strict";

// Esperar a que Swiper esté disponible
function initSwiperCarousels() {
  // Carrusel del Banner Principal
  var bannerEl = document.querySelector(".banner-swiper");

  if (bannerEl && typeof Swiper !== "undefined") {
    new Swiper(".banner-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".banner-swiper .swiper-pagination",
        clickable: true
      },
      speed: 800
    });
  } // Carrusel de Impacto (existente)


  var impactEl = document.querySelector(".impactSwiper");

  if (impactEl && typeof Swiper !== "undefined") {
    new Swiper(".impactSwiper", {
      slidesPerView: 1.15,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
} // Intentar inicializar cuando Swiper esté listo


if (typeof Swiper !== "undefined") {
  // Swiper ya está cargado
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwiperCarousels);
  } else {
    // DOM ya está listo
    initSwiperCarousels();
  }
} else {
  // Esperar a que Swiper se cargue
  var attempts = 0;
  var maxAttempts = 50;
  var waitForSwiper = setInterval(function () {
    if (typeof Swiper !== "undefined") {
      clearInterval(waitForSwiper);

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSwiperCarousels);
      } else {
        initSwiperCarousels();
      }
    }

    attempts++;

    if (attempts >= maxAttempts) {
      clearInterval(waitForSwiper);
      console.warn("Swiper no se cargó correctamente después de 5 segundos");
    }
  }, 100);
}
//# sourceMappingURL=swiper-carousel.dev.js.map
