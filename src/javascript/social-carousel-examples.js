/**
 * Ejemplos de uso del Carrusel de Redes Sociales
 * Diferentes formas de integrar y usar el carrusel
 */

// ==================== EJEMPLO 1: USO CON DATOS LOCALES ====================

// Opción A: Datos directamente en el HTML
document.addEventListener("DOMContentLoaded", function() {
    
    // Crear instancia del manejador
    const carousel = new SocialCarouselManager({
        containerId: "social-carousel",
        wrapperId: "social-wrapper",
        autoplayDelay: 4000,
    });

    // Datos de prueba
    const samplePosts = [
        {
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
        },
        // ... más posts
    ];

    // Cargar datos
    carousel.setLocalPosts(samplePosts);
});

// ==================== EJEMPLO 2: CARGAR DESDE INSTAGRAM API ====================

async function loadInstagramCarousel() {
    const carousel = new SocialCarouselManager();

    // Reemplaza con tu token real (obtenerlo de https://developers.facebook.com/)
    const instagramToken = "TU_INSTAGRAM_ACCESS_TOKEN";
    const instagramUserId = "TU_INSTAGRAM_USER_ID";

    await carousel.loadInstagramPosts(instagramToken, instagramUserId);
}

// Uso:
// loadInstagramCarousel();

// ==================== EJEMPLO 3: CARGAR DESDE FACEBOOK API ====================

async function loadFacebookCarousel() {
    const carousel = new SocialCarouselManager();

    // Reemplaza con tu token real
    const facebookToken = "TU_FACEBOOK_ACCESS_TOKEN";
    const facebookPageId = "TU_PAGE_ID";

    await carousel.loadFacebookPosts(facebookToken, facebookPageId);
}

// Uso:
// loadFacebookCarousel();

// ==================== EJEMPLO 4: CARGAR DE MÚLTIPLES PLATAFORMAS ====================

async function loadAllSocialPlatforms() {
    const carousel = new SocialCarouselManager({
        autoplayDelay: 5000,
    });

    await carousel.loadFromMultiplePlatforms(
        {
            token: "TU_INSTAGRAM_TOKEN",
            userId: "TU_INSTAGRAM_USER_ID"
        },
        {
            token: "TU_FACEBOOK_TOKEN",
            pageId: "TU_FACEBOOK_PAGE_ID"
        }
    );
}

// Uso:
// loadAllSocialPlatforms();

// ==================== EJEMPLO 5: ACTUALIZACIÓN AUTOMÁTICA ====================

function setupAutoRefresh(intervaMinutes = 30) {
    const carousel = new SocialCarouselManager();
    
    // Cargar posts inicialmente
    const loadPosts = async () => {
        await carousel.loadFromMultiplePlatforms(
            {
                token: "TU_INSTAGRAM_TOKEN",
                userId: "TU_INSTAGRAM_USER_ID"
            },
            {
                token: "TU_FACEBOOK_TOKEN",
                pageId: "TU_FACEBOOK_PAGE_ID"
            }
        );
    };

    // Cargar ahora
    loadPosts();

    // Actualizar cada X minutos
    setInterval(loadPosts, intervaMinutes * 60 * 1000);
}

// Uso:
// setupAutoRefresh(30); // Actualizar cada 30 minutos

// ==================== EJEMPLO 6: CARRUSEL CON FILTROS ====================

class FilteredSocialCarousel extends SocialCarouselManager {
    constructor(options = {}) {
        super(options);
        this.allPosts = [];
        this.currentFilter = "all"; // 'all', 'instagram', 'facebook'
    }

    setLocalPosts(posts) {
        this.allPosts = posts;
        this.filterAndRender();
    }

    filterPosts(platform = "all") {
        this.currentFilter = platform;
        this.filterAndRender();
    }

    filterAndRender() {
        if (this.currentFilter === "all") {
            this.posts = this.allPosts;
        } else {
            this.posts = this.allPosts.filter(p => p.platform === this.currentFilter);
        }
        this.renderPosts();
    }

    attachFilterButtons() {
        document.querySelectorAll("[data-filter-carousel]").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const filter = e.target.dataset.filterCarousel;
                this.filterPosts(filter);
                
                // Actualizar UI de botones
                document.querySelectorAll("[data-filter-carousel]").forEach(b => {
                    b.classList.remove("active", "bg-blue-600", "text-white");
                    b.classList.add("bg-gray-200", "text-gray-700");
                });
                e.target.classList.add("active", "bg-blue-600", "text-white");
            });
        });
    }
}

// Uso en HTML:
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

class CachedSocialCarousel extends SocialCarouselManager {
    constructor(options = {}) {
        super(options);
        this.cacheKey = "social_posts_cache";
        this.cacheExpiry = options.cacheExpiry || 3600000; // 1 hora
    }

    async loadWithCache(loadFunction) {
        const cached = this.getFromCache();
        
        if (cached && cached.timestamp > Date.now() - this.cacheExpiry) {
            console.log("Usando posts en caché");
            this.posts = cached.data;
            this.renderPosts();
            return;
        }

        console.log("Cargando posts desde API");
        const posts = await loadFunction();
        this.saveToCache(posts);
        this.setLocalPosts(posts);
    }

    saveToCache(data) {
        localStorage.setItem(this.cacheKey, JSON.stringify({
            data: data,
            timestamp: Date.now()
        }));
    }

    getFromCache() {
        const cached = localStorage.getItem(this.cacheKey);
        return cached ? JSON.parse(cached) : null;
    }

    clearCache() {
        localStorage.removeItem(this.cacheKey);
    }
}

// Uso:
/*
const carousel = new CachedSocialCarousel();

carousel.loadWithCache(async () => {
    // Tu función de carga aquí
    return await fetch('/api/social-posts').then(r => r.json());
});
*/

// ==================== EJEMPLO 8: ESTADÍSTICAS Y ANALYTICS ====================

class AnalyticsSocialCarousel extends SocialCarouselManager {
    constructor(options = {}) {
        super(options);
        this.analytics = {
            totalImpressions: 0,
            totalLikes: 0,
            totalComments: 0,
            engagementRate: 0
        };
    }

    calculateAnalytics() {
        this.analytics = {
            totalImpressions: this.posts.length,
            totalLikes: this.posts.reduce((sum, p) => sum + (p.likes || 0), 0),
            totalComments: this.posts.reduce((sum, p) => sum + (p.comments || 0), 0),
        };

        const totalEngagement = this.analytics.totalLikes + this.analytics.totalComments;
        if (this.posts.length > 0) {
            this.analytics.engagementRate = (
                (totalEngagement / this.posts.length) / 1000
            ).toFixed(2);
        }

        return this.analytics;
    }

    displayAnalytics(containerId = "analytics-container") {
        const stats = this.calculateAnalytics();
        const container = document.getElementById(containerId);
        
        if (!container) return;

        container.innerHTML = `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                    <p class="text-2xl font-bold text-blue-600">${stats.totalImpressions}</p>
                    <p class="text-sm text-gray-600">Publicaciones</p>
                </div>
                <div class="text-center p-4 bg-red-50 rounded-lg">
                    <p class="text-2xl font-bold text-red-600">${this.formatNumber(stats.totalLikes)}</p>
                    <p class="text-sm text-gray-600">Me encanta</p>
                </div>
                <div class="text-center p-4 bg-green-50 rounded-lg">
                    <p class="text-2xl font-bold text-green-600">${this.formatNumber(stats.totalComments)}</p>
                    <p class="text-sm text-gray-600">Comentarios</p>
                </div>
                <div class="text-center p-4 bg-purple-50 rounded-lg">
                    <p class="text-2xl font-bold text-purple-600">${stats.engagementRate}k</p>
                    <p class="text-sm text-gray-600">Engagement</p>
                </div>
            </div>
        `;
    }
}

// ==================== CONFIGURACIONES RÁPIDAS ====================

// Configuración para página de inicio
const config_homepage = {
    autoplayDelay: 5000,
    slidesPerView: 3,
    spaceBetween: 30,
};

// Configuración para página móvil
const config_mobile = {
    autoplayDelay: 4000,
    slidesPerView: 1,
    spaceBetween: 20,
};

// Configuración para carrusel de sidebar
const config_sidebar = {
    autoplayDelay: 6000,
    slidesPerView: 1,
    spaceBetween: 15,
};

// ==================== REFERENCIA RÁPIDA ====================

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
