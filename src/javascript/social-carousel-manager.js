/**
 * Social Media Carousel - Datos y Configuración
 * Archivo para manejar datos de publicaciones y configuración del carrusel
 */

class SocialCarouselManager {
    constructor(options = {}) {
        this.options = {
            containerId: "social-carousel",
            wrapperId: "social-wrapper",
            paginationId: "social-pagination",
            prevBtn: "social-prev",
            nextBtn: "social-next",
            autoplay: true,
            autoplayDelay: 5000,
            slidesPerView: 3,
            spaceBetween: 30,
            ...options
        };

        this.posts = [];
        this.swiper = null;
        this.isLoading = false;
    }

    /**
     * Establecer datos locales de publicaciones
     */
    setLocalPosts(posts) {
        this.posts = posts;
        this.renderPosts();
    }

    /**
     * Cargar posts desde Instagram Graph API
     */
    async loadInstagramPosts(accessToken, userId) {
        this.isLoading = true;
        try {
            const response = await fetch(
                `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,like_count,comments_count,timestamp&access_token=${accessToken}`
            );
            
            if (!response.ok) throw new Error("Error fetching Instagram data");
            
            const data = await response.json();
            
            // Transformar datos de Instagram al formato esperado
            this.posts = data.data.map(post => ({
                id: post.id,
                platform: "instagram",
                author: "Tijuana Innovadora",
                avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
                image: post.media_url || "",
                caption: post.caption || "",
                likes: post.like_count || 0,
                comments: post.comments_count || 0,
                timestamp: this.formatTimestamp(post.timestamp),
                url: `https://instagram.com/p/${post.id}`
            }));

            this.renderPosts();
        } catch (error) {
            console.error("Instagram API Error:", error);
            this.showError("No se pudieron cargar las publicaciones de Instagram");
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * Cargar posts desde Facebook Graph API
     */
    async loadFacebookPosts(accessToken, pageId) {
        this.isLoading = true;
        try {
            const response = await fetch(
                `https://graph.facebook.com/${pageId}/posts?fields=message,picture,link,created_time,likes.summary(true).limit(0),comments.summary(true).limit(0)&access_token=${accessToken}`
            );
            
            if (!response.ok) throw new Error("Error fetching Facebook data");
            
            const data = await response.json();
            
            // Transformar datos de Facebook al formato esperado
            this.posts = data.data.map(post => ({
                id: post.id,
                platform: "facebook",
                author: "Tijuana Innovadora",
                avatar: "https://res.cloudinary.com/dxxtlfbb4/image/upload/v1763997598/TIVerde_bco_apbajh_odpb8u.png",
                image: post.picture || "",
                caption: post.message || "",
                likes: post.likes?.summary?.total_count || 0,
                comments: post.comments?.summary?.total_count || 0,
                timestamp: this.formatTimestamp(post.created_time),
                url: post.link || `https://facebook.com/${post.id}`
            }));

            this.renderPosts();
        } catch (error) {
            console.error("Facebook API Error:", error);
            this.showError("No se pudieron cargar las publicaciones de Facebook");
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * Cargar de múltiples plataformas simultáneamente
     */
    async loadFromMultiplePlatforms(instagramConfig, facebookConfig) {
        try {
            const promises = [];
            
            if (instagramConfig) {
                promises.push(
                    this.loadInstagramPosts(instagramConfig.token, instagramConfig.userId)
                );
            }
            
            if (facebookConfig) {
                promises.push(
                    this.loadFacebookPosts(facebookConfig.token, facebookConfig.pageId)
                );
            }
            
            await Promise.all(promises);
            console.log("All platforms loaded successfully");
        } catch (error) {
            console.error("Error loading from platforms:", error);
        }
    }

    /**
     * Renderizar posts en el HTML
     */
    renderPosts() {
        const wrapper = document.getElementById(this.options.wrapperId);
        if (!wrapper) {
            console.error(`Element with id "${this.options.wrapperId}" not found`);
            return;
        }

        wrapper.innerHTML = this.posts
            .map(post => this.createPostCard(post))
            .join("");

        // Reinicializar Swiper después de renderizar
        this.initSwiper();
    }

    /**
     * Crear HTML de tarjeta de publicación
     */
    createPostCard(post) {
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
                            ${post.caption || "Sin descripción"}
                        </p>

                        <!-- Estadísticas -->
                        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div class="flex gap-4 text-xs font-semibold text-gray-600">
                                <div class="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                                    <i class="far fa-heart"></i>
                                    <span>${this.formatNumber(post.likes)}</span>
                                </div>
                                <div class="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                                    <i class="far fa-comment"></i>
                                    <span>${this.formatNumber(post.comments)}</span>
                                </div>
                            </div>
                            <a href="${post.url}" 
                               target="_blank"
                               rel="noopener noreferrer"
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

    /**
     * Inicializar o reinicializar Swiper
     */
    initSwiper() {
        if (typeof Swiper === "undefined") {
            console.warn("Swiper no está cargado");
            return;
        }

        // Destruir Swiper anterior si existe
        if (this.swiper) {
            this.swiper.destroy();
        }

        // Crear nueva instancia
        this.swiper = new Swiper(`.${this.options.containerId}`, {
            slidesPerView: this.getSlidesPerView(),
            spaceBetween: this.options.spaceBetween,
            loop: true,
            centeredSlides: false,
            grabCursor: true,
            autoplay: this.options.autoplay ? {
                delay: this.options.autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            } : false,
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.1,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            pagination: {
                el: `.${this.options.paginationId}`,
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: `.${this.options.nextBtn}`,
                prevEl: `.${this.options.prevBtn}`,
            },
            effect: "slide",
            speed: 600,
        });
    }

    /**
     * Obtener número de slides dependiendo del tamaño
     */
    getSlidesPerView() {
        const width = window.innerWidth;
        if (width < 640) return 1.1;
        if (width < 768) return 1.5;
        if (width < 1024) return 2.1;
        return 3;
    }

    /**
     * Formatear timestamps
     */
    formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor(diffMs / (1000 * 60));

        if (diffMins < 60) return `hace ${diffMins}m`;
        if (diffHours < 24) return `hace ${diffHours}h`;
        if (diffDays < 7) return `hace ${diffDays}d`;
        
        return date.toLocaleDateString("es-MX");
    }

    /**
     * Formatear números grandes
     */
    formatNumber(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "k";
        return num.toString();
    }

    /**
     * Mostrar mensaje de error
     */
    showError(message) {
        const wrapper = document.getElementById(this.options.wrapperId);
        if (wrapper) {
            wrapper.innerHTML = `
                <div class="col-span-full py-12 text-center">
                    <i class="fas fa-exclamation-circle text-4xl text-red-500 mb-4"></i>
                    <p class="text-gray-600 text-lg">${message}</p>
                </div>
            `;
        }
    }

    /**
     * Destruir instancia
     */
    destroy() {
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    }
}

// Exportar para uso global si está disponible
if (typeof window !== "undefined") {
    window.SocialCarouselManager = SocialCarouselManager;
}
