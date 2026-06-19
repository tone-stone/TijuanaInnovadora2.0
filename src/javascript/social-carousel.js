/**
 * Social Media Carousel Initialization
 * Maneja el carrusel de publicaciones de redes sociales
 */

function initSocialCarousel() {
    // Datos de ejemplo de publicaciones
    const socialPosts = [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
    ];

    // Renderizar posts en el carrusel
    const swiperWrapper = document.querySelector(".social-wrapper");
    if (swiperWrapper && socialPosts.length > 0) {
        swiperWrapper.innerHTML = socialPosts
            .map(post => createPostCard(post))
            .join("");

        // Inicializar Swiper
        initializeSocialCarousel();
    }

    // Función para crear tarjeta de publicación
    function createPostCard(post) {
        const platformColor = post.platform === "instagram"
            ? "from-pink-400 to-purple-500"
            : "from-blue-500 to-blue-700";

        const platformIcon = post.platform === "instagram"
            ? '<i class="fab fa-instagram"></i>'
            : '<i class="fab fa-facebook-f"></i>';

        return `
            <div class="swiper-slide">
                <div class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                    <!-- Badge de plataforma -->
                    <div class="absolute top-4 right-4 z-10">
                        <div class="bg-gradient-to-r ${platformColor} text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold backdrop-blur-sm">
                            ${platformIcon}
                            <span>${post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}</span>
                        </div>
                    </div>

                    <!-- Imagen de publicación -->
                    <div class="relative w-full h-64 overflow-hidden bg-gray-200">
                        <img src="${post.image}" 
                             alt="${post.caption}" 
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                             loading="lazy" />
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    <!-- Contenido de la tarjeta -->
                    <div class="flex flex-col flex-grow p-5">
                        <!-- Autor -->
                        <div class="flex items-center gap-3 mb-4">
                            <img src="${post.avatar}" 
                                 alt="${post.author}" 
                                 class="w-10 h-10 rounded-full object-cover border-2 border-gray-200" 
                                 loading="lazy" />
                            <div class="flex-grow">
                                <p class="font-bold text-gray-900 text-sm">${post.author}</p>
                                <p class="text-xs text-gray-500">${post.timestamp}</p>
                            </div>
                        </div>

                        <!-- Caption -->
                        <p class="text-gray-700 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                            ${post.caption}
                        </p>

                        <!-- Estadísticas -->
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex gap-4 text-xs font-semibold text-gray-600">
                                <div class="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                                    <i class="far fa-heart"></i>
                                    <span>${formatNumber(post.likes)}</span>
                                </div>
                                <div class="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                                    <i class="far fa-comment"></i>
                                    <span>${formatNumber(post.comments)}</span>
                                </div>
                            </div>
                            <a href="${post.url}" 
                               class="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
                                Ver más
                                <i class="fas fa-arrow-right text-xs"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Función para inicializar Swiper
    function initializeSocialCarousel() {
        if (typeof Swiper === "undefined") {
            console.warn("Swiper no está cargado");
            return;
        }

        const swiper = new Swiper(".social-carousel", {
            slidesPerView: 1.1,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.1,
                    spaceBetween: 25,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
            },
            pagination: {
                el: ".social-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".social-next",
                prevEl: ".social-prev",
            },
            effect: "slide",
            speed: 600,
        });

        // Agregar eventos personalizados
        document.addEventListener("click", function(e) {
            if (e.target.closest(".post-like-btn")) {
                e.target.closest(".post-like-btn").classList.toggle("active");
            }
        });
    }

    // Función auxiliar para formatear números
    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "k";
        }
        return num.toString();
    }
}

// Social carousel: lazy init — solo cuando entra al viewport
var socialWrapper = document.querySelector(".social-wrapper");
if (socialWrapper) {
    var socialInited = false;
    var socialObserver = new IntersectionObserver(function(entries) {
        if (!entries[0].isIntersecting || socialInited) return;
        socialInited = true;
        socialObserver.disconnect();
        if (window.requestIdleCallback) {
            requestIdleCallback(initSocialCarousel, { timeout: 2000 });
        } else {
            setTimeout(initSocialCarousel, 0);
        }
    }, { threshold: 0.05 });
    socialObserver.observe(socialWrapper);
}
