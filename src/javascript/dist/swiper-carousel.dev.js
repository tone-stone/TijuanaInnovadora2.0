"use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper === "undefined") return; // Carrusel del Banner Principal

  var bannerEl = document.querySelector(".banner-swiper");

  if (bannerEl) {
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

  if (impactEl) {
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
});
//# sourceMappingURL=swiper-carousel.dev.js.map
