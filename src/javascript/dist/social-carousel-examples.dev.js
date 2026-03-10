"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Ejemplos de uso del Carrusel de Redes Sociales
 * Diferentes formas de integrar y usar el carrusel
 */
// ==================== EJEMPLO 1: USO CON DATOS LOCALES ====================
// Opción A: Datos directamente en el HTML
document.addEventListener("DOMContentLoaded", function () {
  // Crear instancia del manejador
  var carousel = new SocialCarouselManager({
    containerId: "social-carousel",
    wrapperId: "social-wrapper",
    autoplayDelay: 4000
  }); // Datos de prueba

  var samplePosts = [{
    id: 1,
    platform: "instagram",
    author: "Tijuana Innovadora",
    avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
    image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
    caption: "🌿 Tijuana Verde - Conectando comunidad con la naturaleza",
    likes: 1240,
    comments: 89,
    timestamp: new Date(),
    url: "#"
  } // ... más posts
  ]; // Cargar datos

  carousel.setLocalPosts(samplePosts);
}); // ==================== EJEMPLO 2: CARGAR DESDE INSTAGRAM API ====================

function loadInstagramCarousel() {
  var carousel, instagramToken, instagramUserId;
  return regeneratorRuntime.async(function loadInstagramCarousel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          carousel = new SocialCarouselManager(); // Reemplaza con tu token real (obtenerlo de https://developers.facebook.com/)

          instagramToken = "TU_INSTAGRAM_ACCESS_TOKEN";
          instagramUserId = "TU_INSTAGRAM_USER_ID";
          _context.next = 5;
          return regeneratorRuntime.awrap(carousel.loadInstagramPosts(instagramToken, instagramUserId));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
} // Uso:
// loadInstagramCarousel();
// ==================== EJEMPLO 3: CARGAR DESDE FACEBOOK API ====================


function loadFacebookCarousel() {
  var carousel, facebookToken, facebookPageId;
  return regeneratorRuntime.async(function loadFacebookCarousel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          carousel = new SocialCarouselManager(); // Reemplaza con tu token real

          facebookToken = "TU_FACEBOOK_ACCESS_TOKEN";
          facebookPageId = "TU_PAGE_ID";
          _context2.next = 5;
          return regeneratorRuntime.awrap(carousel.loadFacebookPosts(facebookToken, facebookPageId));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Uso:
// loadFacebookCarousel();
// ==================== EJEMPLO 4: CARGAR DE MÚLTIPLES PLATAFORMAS ====================


function loadAllSocialPlatforms() {
  var carousel;
  return regeneratorRuntime.async(function loadAllSocialPlatforms$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          carousel = new SocialCarouselManager({
            autoplayDelay: 5000
          });
          _context3.next = 3;
          return regeneratorRuntime.awrap(carousel.loadFromMultiplePlatforms({
            token: "TU_INSTAGRAM_TOKEN",
            userId: "TU_INSTAGRAM_USER_ID"
          }, {
            token: "TU_FACEBOOK_TOKEN",
            pageId: "TU_FACEBOOK_PAGE_ID"
          }));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
} // Uso:
// loadAllSocialPlatforms();
// ==================== EJEMPLO 5: ACTUALIZACIÓN AUTOMÁTICA ====================


function setupAutoRefresh() {
  var intervaMinutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  var carousel = new SocialCarouselManager(); // Cargar posts inicialmente

  var loadPosts = function loadPosts() {
    return regeneratorRuntime.async(function loadPosts$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(carousel.loadFromMultiplePlatforms({
              token: "TU_INSTAGRAM_TOKEN",
              userId: "TU_INSTAGRAM_USER_ID"
            }, {
              token: "TU_FACEBOOK_TOKEN",
              pageId: "TU_FACEBOOK_PAGE_ID"
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    });
  }; // Cargar ahora


  loadPosts(); // Actualizar cada X minutos

  setInterval(loadPosts, intervaMinutes * 60 * 1000);
} // Uso:
// setupAutoRefresh(30); // Actualizar cada 30 minutos
// ==================== EJEMPLO 6: CARRUSEL CON FILTROS ====================


var FilteredSocialCarousel =
/*#__PURE__*/
function (_SocialCarouselManage) {
  _inherits(FilteredSocialCarousel, _SocialCarouselManage);

  function FilteredSocialCarousel() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FilteredSocialCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilteredSocialCarousel).call(this, options));
    _this.allPosts = [];
    _this.currentFilter = "all"; // 'all', 'instagram', 'facebook'

    return _this;
  }

  _createClass(FilteredSocialCarousel, [{
    key: "setLocalPosts",
    value: function setLocalPosts(posts) {
      this.allPosts = posts;
      this.filterAndRender();
    }
  }, {
    key: "filterPosts",
    value: function filterPosts() {
      var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
      this.currentFilter = platform;
      this.filterAndRender();
    }
  }, {
    key: "filterAndRender",
    value: function filterAndRender() {
      var _this2 = this;

      if (this.currentFilter === "all") {
        this.posts = this.allPosts;
      } else {
        this.posts = this.allPosts.filter(function (p) {
          return p.platform === _this2.currentFilter;
        });
      }

      this.renderPosts();
    }
  }, {
    key: "attachFilterButtons",
    value: function attachFilterButtons() {
      var _this3 = this;

      document.querySelectorAll("[data-filter-carousel]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          var filter = e.target.dataset.filterCarousel;

          _this3.filterPosts(filter); // Actualizar UI de botones


          document.querySelectorAll("[data-filter-carousel]").forEach(function (b) {
            b.classList.remove("active", "bg-blue-600", "text-white");
            b.classList.add("bg-gray-200", "text-gray-700");
          });
          e.target.classList.add("active", "bg-blue-600", "text-white");
        });
      });
    }
  }]);

  return FilteredSocialCarousel;
}(SocialCarouselManager); // Uso en HTML:

/*
<div class="flex gap-2 mb-6">
    <button data-filter-carousel="all" class="px-4 py-2 rounded bg-blue-600 text-white">
        Todas
    </button>
    <button data-filter-carousel="instagram" class="px-4 py-2 rounded bg-gray-200">
        Instagram
    </button>
    <button data-filter-carousel="facebook" class="px-4 py-2 rounded bg-gray-200">
        Facebook
    </button>
</div>

<div class="social-carousel swiper">
    <div class="social-wrapper swiper-wrapper"></div>
</div>
*/
// ==================== EJEMPLO 7: INTEGRACIÓN CON ALMACENAMIENTO LOCAL ====================


var CachedSocialCarousel =
/*#__PURE__*/
function (_SocialCarouselManage2) {
  _inherits(CachedSocialCarousel, _SocialCarouselManage2);

  function CachedSocialCarousel() {
    var _this4;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CachedSocialCarousel);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(CachedSocialCarousel).call(this, options));
    _this4.cacheKey = "social_posts_cache";
    _this4.cacheExpiry = options.cacheExpiry || 3600000; // 1 hora

    return _this4;
  }

  _createClass(CachedSocialCarousel, [{
    key: "loadWithCache",
    value: function loadWithCache(loadFunction) {
      var cached, posts;
      return regeneratorRuntime.async(function loadWithCache$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              cached = this.getFromCache();

              if (!(cached && cached.timestamp > Date.now() - this.cacheExpiry)) {
                _context5.next = 6;
                break;
              }

              console.log("Usando posts en caché");
              this.posts = cached.data;
              this.renderPosts();
              return _context5.abrupt("return");

            case 6:
              console.log("Cargando posts desde API");
              _context5.next = 9;
              return regeneratorRuntime.awrap(loadFunction());

            case 9:
              posts = _context5.sent;
              this.saveToCache(posts);
              this.setLocalPosts(posts);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "saveToCache",
    value: function saveToCache(data) {
      localStorage.setItem(this.cacheKey, JSON.stringify({
        data: data,
        timestamp: Date.now()
      }));
    }
  }, {
    key: "getFromCache",
    value: function getFromCache() {
      var cached = localStorage.getItem(this.cacheKey);
      return cached ? JSON.parse(cached) : null;
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      localStorage.removeItem(this.cacheKey);
    }
  }]);

  return CachedSocialCarousel;
}(SocialCarouselManager); // Uso:

/*
const carousel = new CachedSocialCarousel();

carousel.loadWithCache(async () => {
    // Tu función de carga aquí
    return await fetch('/api/social-posts').then(r => r.json());
});
*/
// ==================== EJEMPLO 8: ESTADÍSTICAS Y ANALYTICS ====================


var AnalyticsSocialCarousel =
/*#__PURE__*/
function (_SocialCarouselManage3) {
  _inherits(AnalyticsSocialCarousel, _SocialCarouselManage3);

  function AnalyticsSocialCarousel() {
    var _this5;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AnalyticsSocialCarousel);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(AnalyticsSocialCarousel).call(this, options));
    _this5.analytics = {
      totalImpressions: 0,
      totalLikes: 0,
      totalComments: 0,
      engagementRate: 0
    };
    return _this5;
  }

  _createClass(AnalyticsSocialCarousel, [{
    key: "calculateAnalytics",
    value: function calculateAnalytics() {
      this.analytics = {
        totalImpressions: this.posts.length,
        totalLikes: this.posts.reduce(function (sum, p) {
          return sum + (p.likes || 0);
        }, 0),
        totalComments: this.posts.reduce(function (sum, p) {
          return sum + (p.comments || 0);
        }, 0)
      };
      var totalEngagement = this.analytics.totalLikes + this.analytics.totalComments;

      if (this.posts.length > 0) {
        this.analytics.engagementRate = (totalEngagement / this.posts.length / 1000).toFixed(2);
      }

      return this.analytics;
    }
  }, {
    key: "displayAnalytics",
    value: function displayAnalytics() {
      var containerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "analytics-container";
      var stats = this.calculateAnalytics();
      var container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = "\n            <div class=\"grid grid-cols-2 md:grid-cols-4 gap-4\">\n                <div class=\"text-center p-4 bg-blue-50 rounded-lg\">\n                    <p class=\"text-2xl font-bold text-blue-600\">".concat(stats.totalImpressions, "</p>\n                    <p class=\"text-sm text-gray-600\">Publicaciones</p>\n                </div>\n                <div class=\"text-center p-4 bg-red-50 rounded-lg\">\n                    <p class=\"text-2xl font-bold text-red-600\">").concat(this.formatNumber(stats.totalLikes), "</p>\n                    <p class=\"text-sm text-gray-600\">Me encanta</p>\n                </div>\n                <div class=\"text-center p-4 bg-green-50 rounded-lg\">\n                    <p class=\"text-2xl font-bold text-green-600\">").concat(this.formatNumber(stats.totalComments), "</p>\n                    <p class=\"text-sm text-gray-600\">Comentarios</p>\n                </div>\n                <div class=\"text-center p-4 bg-purple-50 rounded-lg\">\n                    <p class=\"text-2xl font-bold text-purple-600\">").concat(stats.engagementRate, "k</p>\n                    <p class=\"text-sm text-gray-600\">Engagement</p>\n                </div>\n            </div>\n        ");
    }
  }]);

  return AnalyticsSocialCarousel;
}(SocialCarouselManager); // ==================== CONFIGURACIONES RÁPIDAS ====================
// Configuración para página de inicio


var config_homepage = {
  autoplayDelay: 5000,
  slidesPerView: 3,
  spaceBetween: 30
}; // Configuración para página móvil

var config_mobile = {
  autoplayDelay: 4000,
  slidesPerView: 1,
  spaceBetween: 20
}; // Configuración para carrusel de sidebar

var config_sidebar = {
  autoplayDelay: 6000,
  slidesPerView: 1,
  spaceBetween: 15
}; // ==================== REFERENCIA RÁPIDA ====================

/*
PASOS PARA USAR EL CARRUSEL:

1. Incluye los scripts:
   <link rel="stylesheet" href="src/styles/social-carousel.css" />
   <script src="src/javascript/social-carousel-manager.js"></script>

2. Agrega el HTML:
   <div class="social-carousel swiper">
       <div class="social-wrapper swiper-wrapper"></div>
       <div class="social-pagination swiper-pagination"></div>
   </div>

3. Inicializa con JavaScript:
   const carousel = new SocialCarouselManager();
   carousel.setLocalPosts(postsArray);

4. O carga desde API:
   await carousel.loadInstagramPosts(token, userId);
*/
//# sourceMappingURL=social-carousel-examples.dev.js.map
