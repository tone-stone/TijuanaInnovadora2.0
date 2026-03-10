"use strict";

/**
 * Social Media Carousel Initialization
 * Maneja el carrusel de publicaciones de redes sociales
 */
document.addEventListener("DOMContentLoaded", function () {
  // Datos de ejemplo de publicaciones
  var socialPosts = [{
    id: 1,
    platform: "instagram",
    author: "Tijuana Innovadora",
    avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
    image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
    caption: "🌿 Tijuana Verde conectando a la comunidad con la naturaleza y la innovación sustentable. ¡Únete al movimiento! #TijuanaInnovadora",
    likes: 1240,
    comments: 89,
    timestamp: "hace 2 días",
    url: "https://www.instagram.com/tjinnovadora/"
  }, {
    id: 2,
    platform: "facebook",
    author: "Tijuana Innovadora",
    avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
    image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997587/InicioBanner_gzjsvv_yazof7.webp",
    caption: "📣 ¡Nuevas iniciativas de arte e innovación en la región! Conoce cómo estamos transformando Tijuana juntos.",
    likes: 2150,
    comments: 156,
    timestamp: "hace 3 días",
    url: "https://www.facebook.com/TjInnovadora"
  }, {
    id: 3,
    platform: "instagram",
    author: "Tijuana Innovadora",
    avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
    image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
    caption: "✨ La sinfónica juvenil cautiva a nuevas generaciones con la música como herramienta de transformación social.",
    likes: 1890,
    comments: 124,
    timestamp: "hace 5 días",
    url: "#"
  }, {
    id: 4,
    platform: "facebook",
    author: "Tijuana Innovadora",
    avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
    image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997587/InicioBanner_gzjsvv_yazof7.webp",
    caption: "🏆 Jóvenes líderes de Tijuana comparten sus visiones de futuro para la comunidad fronteriza.",
    likes: 2580,
    comments: 201,
    timestamp: "hace 7 días",
    url: "#"
  }, {
    id: 5,
    platform: "instagram",
    author: "Tijuana Innovadora",
    avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
    image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
    caption: "🎨 InnovaModa: donde el diseño y la sustentabilidad se encuentran para crear prendas del futuro.",
    likes: 1650,
    comments: 98,
    timestamp: "hace 10 días",
    url: "#"
  }]; // Renderizar posts en el carrusel

  var swiperWrapper = document.querySelector(".social-wrapper");

  if (swiperWrapper && socialPosts.length > 0) {
    swiperWrapper.innerHTML = socialPosts.map(function (post) {
      return createPostCard(post);
    }).join(""); // Inicializar Swiper

    initializeSocialCarousel();
  } // Función para crear tarjeta de publicación


  function createPostCard(post) {
    var platformColor = post.platform === "instagram" ? "from-pink-400 to-purple-500" : "from-blue-500 to-blue-700";
    var platformIcon = post.platform === "instagram" ? '<i class="fab fa-instagram"></i>' : '<i class="fab fa-facebook-f"></i>';
    return "\n            <div class=\"swiper-slide\">\n                <div class=\"group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1\">\n                    <!-- Badge de plataforma -->\n                    <div class=\"absolute top-4 right-4 z-10\">\n                        <div class=\"bg-gradient-to-r ".concat(platformColor, " text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold backdrop-blur-sm\">\n                            ").concat(platformIcon, "\n                            <span>").concat(post.platform.charAt(0).toUpperCase() + post.platform.slice(1), "</span>\n                        </div>\n                    </div>\n\n                    <!-- Imagen de publicaci\xF3n -->\n                    <div class=\"relative w-full h-64 overflow-hidden bg-gray-200\">\n                        <img src=\"").concat(post.image, "\" \n                             alt=\"").concat(post.caption, "\" \n                             class=\"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500\"\n                             loading=\"lazy\" />\n                        <div class=\"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300\"></div>\n                    </div>\n\n                    <!-- Contenido de la tarjeta -->\n                    <div class=\"flex flex-col flex-grow p-5\">\n                        <!-- Autor -->\n                        <div class=\"flex items-center gap-3 mb-4\">\n                            <img src=\"").concat(post.avatar, "\" \n                                 alt=\"").concat(post.author, "\" \n                                 class=\"w-10 h-10 rounded-full object-cover border-2 border-gray-200\" \n                                 loading=\"lazy\" />\n                            <div class=\"flex-grow\">\n                                <p class=\"font-bold text-gray-900 text-sm\">").concat(post.author, "</p>\n                                <p class=\"text-xs text-gray-500\">").concat(post.timestamp, "</p>\n                            </div>\n                        </div>\n\n                        <!-- Caption -->\n                        <p class=\"text-gray-700 text-sm leading-relaxed mb-4 flex-grow line-clamp-3\">\n                            ").concat(post.caption, "\n                        </p>\n\n                        <!-- Estad\xEDsticas -->\n                        <div class=\"flex items-center justify-between pt-4 border-t border-gray-200\">\n                            <div class=\"flex gap-4 text-xs font-semibold text-gray-600\">\n                                <div class=\"flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer\">\n                                    <i class=\"far fa-heart\"></i>\n                                    <span>").concat(formatNumber(post.likes), "</span>\n                                </div>\n                                <div class=\"flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer\">\n                                    <i class=\"far fa-comment\"></i>\n                                    <span>").concat(formatNumber(post.comments), "</span>\n                                </div>\n                            </div>\n                            <a href=\"").concat(post.url, "\" \n                               class=\"text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1\">\n                                Ver m\xE1s\n                                <i class=\"fas fa-arrow-right text-xs\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
  } // Función para inicializar Swiper


  function initializeSocialCarousel() {
    if (typeof Swiper === "undefined") {
      console.warn("Swiper no está cargado");
      return;
    }

    var swiper = new Swiper(".social-carousel", {
      slidesPerView: 1.1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2.1,
          spaceBetween: 25,
          centeredSlides: false
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false
        }
      },
      pagination: {
        el: ".social-pagination",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".social-next",
        prevEl: ".social-prev"
      },
      effect: "slide",
      speed: 600
    }); // Agregar eventos personalizados

    document.addEventListener("click", function (e) {
      if (e.target.closest(".post-like-btn")) {
        e.target.closest(".post-like-btn").classList.toggle("active");
      }
    });
  } // Función auxiliar para formatear números


  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }

    return num.toString();
  }
});
//# sourceMappingURL=social-carousel.dev.js.map
