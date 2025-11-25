"use strict";

var swiper;

function changeGallery(year) {
  var gallery = document.getElementById("timeline-gallery");
  gallery.style.opacity = 0;
  setTimeout(function () {
    gallery.innerHTML = "\n        <div class=\"swiper mySwiper w-full max-w-4xl mx-auto\">\n          <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\">\n              <img loading=\"lazy\" src=\"../src/assets/images/".concat(year, ".webp\" class=\"rounded-xl shadow-xl object-cover w-full max-h-[500px]\"/>\n            </div>\n            <div class=\"swiper-slide\">\n              <img loading=\"lazy\" src=\"../src/assets/images/").concat(year, "-1.webp\" class=\"rounded-xl shadow-xl object-cover w-full max-h-[500px]\"/>\n            </div>\n            <div class=\"swiper-slide\">\n              <img loading=\"lazy\" src=\"../src/assets/images/").concat(year, "-2.webp\" class=\"rounded-xl shadow-xl object-cover w-full max-h-[500px]\"/>\n            </div>\n          </div>\n          <div class=\"swiper-pagination mt-4\"></div>\n        </div>\n      "); // Reinit swiper

    setTimeout(function () {
      swiper = new Swiper(".mySwiper", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }
      });
      gallery.style.opacity = 1;
    }, 50);
  }, 300);
}
//# sourceMappingURL=script.dev.js.map
