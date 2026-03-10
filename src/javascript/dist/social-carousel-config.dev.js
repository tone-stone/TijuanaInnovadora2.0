"use strict";

/**
 * Configuración del Carrusel de Redes Sociales
 * Edita este archivo para personalizar datos sin tocar el código principal
 */
// ==================== DATOS DE PUBLICACIONES ====================
// Array de publicaciones de ejemplo
// Reemplaza estos datos con los tuyos
window.SOCIAL_POSTS_CONFIG = [{
  id: 1,
  platform: "instagram",
  author: "Tijuana Innovadora",
  avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
  image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
  caption: "🌿 Tijuana Verde conectando a la comunidad con la naturaleza y la innovación sustentable. ¡Únete al movimiento! #TijuanaInnovadora",
  likes: 1240,
  comments: 89,
  timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  // hace 2 días
  url: "https://instagram.com"
}, {
  id: 2,
  platform: "facebook",
  author: "Tijuana Innovadora",
  avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
  image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997587/InicioBanner_gzjsvv_yazof7.webp",
  caption: "📣 ¡Nuevas iniciativas de arte e innovación en la región! Conoce cómo estamos transformando Tijuana juntos.",
  likes: 2150,
  comments: 156,
  timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  // hace 3 días
  url: "https://facebook.com"
}, {
  id: 3,
  platform: "instagram",
  author: "Tijuana Innovadora",
  avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
  image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
  caption: "✨ La sinfónica juvenil cautiva a nuevas generaciones con la música como herramienta de transformación social.",
  likes: 1890,
  comments: 124,
  timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  // hace 5 días
  url: "https://instagram.com"
}, {
  id: 4,
  platform: "facebook",
  author: "Tijuana Innovadora",
  avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
  image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997587/InicioBanner_gzjsvv_yazof7.webp",
  caption: "🏆 Jóvenes líderes de Tijuana comparten sus visiones de futuro para la comunidad fronteriza.",
  likes: 2580,
  comments: 201,
  timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  // hace 7 días
  url: "https://facebook.com"
}, {
  id: 5,
  platform: "instagram",
  author: "Tijuana Innovadora",
  avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
  image: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997585/verde_ciloqi_etr8xk.webp",
  caption: "🎨 InnovaModa: donde el diseño y la sustentabilidad se encuentran para crear prendas del futuro.",
  likes: 1650,
  comments: 98,
  timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
  // hace 10 días
  url: "https://instagram.com"
}]; // ==================== CONFIGURACIÓN DEL CARRUSEL ====================

window.CAROUSEL_CONFIG = {
  // Identificadores CSS
  containerId: "social-carousel",
  wrapperId: "social-wrapper",
  paginationId: "social-pagination",
  prevBtn: "social-prev",
  nextBtn: "social-next",
  // Comportamiento del carrusel
  autoplay: true,
  // Activar autoplay
  autoplayDelay: 5000,
  // Milisegundos entre slides (5000 = 5 segundos)
  pauseOnMouseEnter: true,
  // Pausar al pasar el mouse
  loop: true,
  // Repetir carrusel infinitamente
  grabCursor: true,
  // Cambiar cursor al pasar sobre slides
  centeredSlides: false,
  // Centrar slides activos
  // Animación
  speed: 600,
  // Tiempo de transición en ms
  effect: "slide",
  // Tipo de efecto: 'slide', 'fade', 'cube', 'coverflow'
  // Responsive - cantidad de slides visibles
  slidesPerView: {
    mobile: 1.1,
    // < 640px
    tablet: 2.1,
    // 640px - 1024px
    desktop: 3 // > 1024px

  },
  // Espaciado entre slides
  spaceBetween: {
    mobile: 20,
    tablet: 25,
    desktop: 30
  },
  // Opciones de paginación
  pagination: {
    enabled: true,
    dynamicBullets: true,
    // Los puntos se ajustan dinámicamente
    clickable: true // Click en puntos para navegar

  },
  // Opciones de navegación (botones prev/next)
  navigation: {
    enabled: true,
    hideOnMobile: true // Ocultar en dispositivos móviles

  }
}; // ==================== CONFIGURACIÓN DE REDES SOCIALES ====================

window.SOCIAL_APIS_CONFIG = {
  // Configuración de Instagram
  instagram: {
    enabled: false,
    // Cambiar a true para usar API
    token: "TU_INSTAGRAM_TOKEN",
    // Reemplaza con tu token
    userId: "TU_INSTAGRAM_USER_ID" // Reemplaza con tu ID

  },
  // Configuración de Facebook
  facebook: {
    enabled: false,
    // Cambiar a true para usar API
    token: "TU_FACEBOOK_TOKEN",
    // Reemplaza con tu token
    pageId: "TU_PAGE_ID" // Reemplaza con tu ID de página

  }
}; // ==================== CONFIGURACIÓN DE CACHÉ ====================

window.CACHE_CONFIG = {
  enabled: true,
  // Usar localStorage para caché
  key: "social_posts_cache",
  // Clave de caché
  expiry: 3600000 // Expiración en ms (3600000 = 1 hora)

}; // ==================== CONFIGURACIÓN DE APARIENCIA ====================

window.APPEARANCE_CONFIG = {
  // Colores (variables CSS)
  primaryColor: "#005daa",
  // Azul principal
  accentColor: "#c49e4f",
  // Color dorado
  instagramGradient: "from-pink-400 to-purple-500",
  // Gradiente de Instagram
  facebookGradient: "from-blue-500 to-blue-700",
  // Gradiente de Facebook
  // Animaciones
  animationDuration: 600,
  // Duración de animaciones en ms
  hoverScale: 1.02,
  // Escala al hacer hover
  hoverElevation: true,
  // Efecto de elevación
  // Mostrar/ocultar elementos
  showAvatar: true,
  // Mostrar avatar del autor
  showTimestamp: true,
  // Mostrar fecha/hora
  showStats: true,
  // Mostrar likes y comentarios
  showViewMore: true,
  // Mostrar botón "Ver más"
  showPlatformBadge: true // Mostrar badge de plataforma

}; // ==================== REDES SOCIALES LINKS ====================

window.SOCIAL_LINKS = {
  instagram: "https://instagram.com/tu-usuario",
  facebook: "https://facebook.com/tu-pagina",
  twitter: "https://twitter.com/tu-usuario",
  youtube: "https://youtube.com/tu-canal",
  tiktok: "https://tiktok.com/@tu-usuario",
  linkedin: "https://linkedin.com/company/tu-empresa"
}; // ==================== FUNCIONES HELPER ====================

/**
 * Cambiar la configuración dinámicamente
 * Uso: updateConfig({ autoplayDelay: 3000 })
 */

window.updateConfig = function (newConfig) {
  Object.assign(window.CAROUSEL_CONFIG, newConfig);
  console.log("Configuración actualizada:", window.CAROUSEL_CONFIG);
};
/**
 * Actualizar datos de publicaciones dinámicamente
 * Uso: updatePosts([{ id: 1, ... }])
 */


window.updatePosts = function (newPosts) {
  window.SOCIAL_POSTS_CONFIG = newPosts;
  console.log("Publicaciones actualizadas:", window.SOCIAL_POSTS_CONFIG); // Reiniciar carrusel si está disponible

  if (window.SocialCarouselManager) {
    var carousel = new window.SocialCarouselManager();
    carousel.setLocalPosts(newPosts);
  }
};
/**
 * Agregar nueva publicación
 * Uso: addPost({ id: 6, ... })
 */


window.addPost = function (post) {
  window.SOCIAL_POSTS_CONFIG.push(post);
  console.log("Publicación agregada:", post);
};
/**
 * Limpiar caché
 */


window.clearSocialCache = function () {
  localStorage.removeItem(window.CACHE_CONFIG.key);
  console.log("Caché limpiado");
};
/**
 * Obtener posts filtrados por plataforma
 */


window.getPostsByPlatform = function (platform) {
  return window.SOCIAL_POSTS_CONFIG.filter(function (post) {
    return post.platform === platform;
  });
};
/**
 * Obtener estadísticas de posts
 */


window.getSocialStats = function () {
  var stats = {
    totalPosts: window.SOCIAL_POSTS_CONFIG.length,
    totalLikes: 0,
    totalComments: 0,
    instagramPosts: 0,
    facebookPosts: 0
  };
  window.SOCIAL_POSTS_CONFIG.forEach(function (post) {
    stats.totalLikes += post.likes || 0;
    stats.totalComments += post.comments || 0;
    if (post.platform === "instagram") stats.instagramPosts++;
    if (post.platform === "facebook") stats.facebookPosts++;
  });
  return stats;
}; // Loguear configuración inicial cuando el script se carga


console.log("Social Media Carousel Config Loaded");
console.log("Publicaciones:", window.SOCIAL_POSTS_CONFIG.length);
console.log("Config:", window.CAROUSEL_CONFIG);
//# sourceMappingURL=social-carousel-config.dev.js.map
