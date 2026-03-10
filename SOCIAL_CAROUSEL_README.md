# 📱 Carrusel de Publicaciones de Redes Sociales

Carrusel moderno y responsivo para mostrar publicaciones de Instagram y Facebook en tu sitio web de Tijuana Innovadora.

## 🚀 Características

- ✅ Carrusel interactivo con Swiper.js
- ✅ Diseño moderno adaptado a Tijuana Innovadora
- ✅ Tarjetas lindas con animaciones suaves
- ✅ Completamente responsivo (móvil, tablet, desktop)
- ✅ Accesible y optimizado para SEO
- ✅ Datos de ejemplo incluidos
- ✅ Compatible con APIs de Facebook e Instagram

## 📂 Archivos Incluidos

```
src/
├── javascript/
│   └── social-carousel.js        # Lógica del carrusel
├── styles/
│   └── social-carousel.css       # Estilos personalizados
└── publicaciones/
    └── index.html                # Página de ejemplo completa
```

## 🔧 Instalación Rápida

### Opción 1: Página Completa

Si quieres una página dedicada a mostrar publicaciones:

```html
<!-- Visita: /publicaciones/index.html -->
```

### Opción 2: Integrar en Página Existente

1. **Agrega los scripts en el `<head>`:**

```html
<!-- SwiperJS (si no lo tienes) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- Nuestros archivos -->
<link rel="stylesheet" href="./src/styles/social-carousel.css" />
<script src="./src/javascript/social-carousel.js" defer></script>
```

2. **Agrega el HTML del carrusel en el `<body>`:**

```html
<section class="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-5">
        
        <!-- Header -->
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Síguenos</h2>
            <p class="text-lg text-gray-600">Mantente conectado con nuestras iniciativas</p>
        </div>

        <!-- Carrusel -->
        <div class="relative group">
            <div class="social-carousel swiper">
                <div class="social-wrapper swiper-wrapper">
                    <!-- Las tarjetas se generan automáticamente -->
                </div>
                <div class="social-pagination swiper-pagination mt-8"></div>
            </div>

            <!-- Botones de navegación -->
            <button class="social-prev absolute -left-16 top-1/2 transform -translate-y-1/2">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="social-next absolute -right-16 top-1/2 transform -translate-y-1/2">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</section>
```

## 🎨 Personalización

### Cambiar Datos de Publicaciones

Edita el array `socialPosts` en `social-carousel.js`:

```javascript
const socialPosts = [
    {
        id: 1,
        platform: "instagram",              // 'instagram' o 'facebook'
        author: "Tijuana Innovadora",
        avatar: "url-a-avatar",
        image: "url-a-imagen",
        caption: "Tu texto de publicación",
        likes: 1240,
        comments: 89,
        timestamp: "hace 2 días",
        url: "https://link-a-publicacion.com"
    },
    // ... más publicaciones
];
```

### Colores Personalizados

Modifica en `social-carousel.css`:

```css
:root {
    --swiper-pagination-color: #005daa;     /* Color azul */
    --tijuana-verde: #c4d600;
    --tijuana-dorado: #9a7611;
}
```

### Velocidad del Carrusel

En `social-carousel.js`, busca `autoplay`:

```javascript
autoplay: {
    delay: 5000,              // Cambiar a 3000 ms (3 segundos)
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
},
```

## 🔌 Conectar con APIs Reales

### Instagram Graph API

```javascript
// En social-carousel.js, reemplaza el array con:

async function fetchInstagramPosts() {
    const token = "TU_ACCESS_TOKEN";
    const userId = "TU_USER_ID";
    
    try {
        const response = await fetch(
            `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,like_count,comments_count,timestamp&access_token=${token}`
        );
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return [];
    }
}
```

### Facebook Graph API

```javascript
async function fetchFacebookPosts() {
    const token = "TU_ACCESS_TOKEN";
    const pageId = "TU_PAGE_ID";
    
    try {
        const response = await fetch(
            `https://graph.facebook.com/${pageId}/posts?fields=message,picture,link,created_time,likes.summary(true).limit(0),comments.summary(true).limit(0)&access_token=${token}`
        );
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching Facebook posts:", error);
        return [];
    }
}
```

## 📱 Breakpoints Responsivos

El carrusel se adapta automáticamente:

- **Mobile** (< 640px): 1 tarjeta visible
- **Tablet** (640px - 768px): 1.5 tarjetas
- **Tablet grande** (768px - 1024px): 2.1 tarjetas
- **Desktop** (> 1024px): 3 tarjetas

## ♿ Accesibilidad

El carrusel incluye:
- Etiquetas ARIA para lectores de pantalla
- Navegación con teclado
- Contraste de color suficiente
- Estructura semántica HTML5

## 🎬 Animaciones

Las tarjetas incluyen:
- Entrada suave (fade-up con AOS)
- Hover elevation effect
- Zoom en imagen al pasar mouse
- Transiciones suaves en todos los elementos

## 📊 Estadísticas Mostradas

Cada tarjeta muestra:
- Avatar del autor
- Nombre de la cuenta
- Tiempo transcurrido
- Texto de la publicación
- Conteo de likes
- Conteo de comentarios
- Enlace a publicación original

## 🚀 Optimizaciones de Rendimiento

- Lazy loading en imágenes
- CSS animado con GPU acceleration
- Minificación de código
- Carga diferida con `defer` en scripts
- Preload de fuentes y recursos críticos

## 🐛 Solución de Problemas

### El carrusel no aparece
- Verifica que Swiper.js esté cargado
- Confirma que `social-carousel.js` esté después del HTML

### Las imágenes no cargan
- Usa URLs absolutas, no rutas relativas
- Verifica CORS en URL de imágenes externas

### Estilos no se aplican
- Asegúrate de que Tailwind CSS esté configurado
- Carga `social-carousel.css` antes del script

## 📄 Ejemplo Completo

Ver página completa en: `/publicaciones/index.html`

## 📚 Referencias

- [Swiper.js Documentation](https://swiperjs.com/)
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-graph-api/)
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📝 Licencia

Este carrusel es parte del proyecto Tijuana Innovadora y está disponible bajo licencia MIT.

## 🤝 Contribuciones

¿Mejoras o sugerencias? ¡Ayuda a hacer mejor el carrusel!

---

**Última actualización:** 1 de marzo, 2026
