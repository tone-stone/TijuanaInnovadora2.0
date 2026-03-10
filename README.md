# Proyecto Tijuana Innovadora

Este repositorio contiene el código estático del sitio web de **Tijuana Innovadora**, un movimiento ciudadano que promueve el arte, la ciencia, la tecnología y el liderazgo en la región fronteriza de Tijuana, México.

## 🧱 Estructura del proyecto

```
TijuanaInnovadora2.0/
├─ index.html                    # Página principal
├─ publicaciones/                # Página de carrusel de redes sociales
├─ esferas-proyectos/            # Subsitios por esfera (arte-industria, casa-ideas, etc.)
├─ eventos/                      # Página de eventos
├─ noticias/                     # Página de noticias
├─ participa/                    # Página de participación
├─ quienes-somos/                # Página "Quiénes somos"
├─ contacto/                     # Página de contacto
├─ src/                          # Recursos compartidos
│   ├─ assets/                   # Imágenes, fonts, revistas
│   ├─ javascript/               # Scripts de interacción
│   └─ styles/                   # CSS personalizados
├─ sitemap.xml                   # Mapa del sitio para buscadores
└─ robots.txt                    # Directivas para crawlers
```

## 🚀 Inicio rápido

1. Clona el repositorio en tu servidor local (MAMP, Apache, etc.).
2. Asegúrate de que el directorio raíz (`TijuanaInnovadora2.0`) sea accesible via HTTP.
3. Navega a `http://localhost/TijuanaInnovadora2.0/` para ver la página principal.

> El sitio es completamente estático; no requiere base de datos ni backend adicional.

## 🔧 Herramientas y dependencias

- **Tailwind CSS** (via CDN) para utilidades de diseño.
- **Swiper.js** para carruseles interactivos.
- **AOS** (Animate On Scroll) para animaciones de aparición.
- **Font Awesome**, **Animate.css** y **Alpine.js** en algunas páginas.
- Scripts custom en `src/javascript` tales como `menu-navigation.js`, `social-carousel.js`, etc.
- **Cloudinary** se usa para alojar imágenes optimizadas.

## 📦 Desarrollo y personalización

### Carrusel de redes sociales
Se agregó un componente reutilizable con soporte para APIs de Instagram y Facebook. Los archivos clave son:
- `src/javascript/social-carousel.js` (lógica básica)
- `src/javascript/social-carousel-manager.js` (gestión avanzada, APIs, caché)
- `src/styles/social-carousel.css` (estilos personalizados)
- `publicaciones/index.html` (ejemplo completo)

Consulta `SOCIAL_CAROUSEL_README.md` e `INTEGRACION_CARRUSEL.html` para instrucciones detalladas.

### Configuraciones globales
- Variables de color en `src/styles/global.css`.
- Menú y comportamiento móvil en `src/javascript/menu-navigation.js`.

### SEO y performance
Se aplicaron mejoras como:
- Metadatos personalizados por página.
- Contenido introductorios y footer de enlaces internos.
- Archivo `sitemap.xml` y `robots.txt` preparados.
- Carga diferida (`defer`) de scripts y optimización de imágenes `loading="lazy"`.
- Ejemplo de JSON‑LD `Event` en `eventos/index.html`.

## 📁 Archivos importantes adicionales

- `SOCIAL_CAROUSEL_README.md` – documentación del carrusel social.
- `INTEGRACION_CARRUSEL.html` – guía paso a paso para integrarlo.
- `INICIO_RAPIDO_CARRUSEL.html` – demo interactiva.
- `src/javascript/*examples.js` – ejemplos de uso del componente social.

## ✅ Buenas prácticas

- Mantén actualizadas las metadescripciones y encabezados H1/H2.
- Usa URLs canónicas correctas para cada página.
- Añade `alt` descriptivos en todas las imágenes.
- Usa el sitemap para subir a Search Console.
- Vigila PageSpeed Insights y aplica optimizaciones adicionales si es necesario.

## 📝 Información adicional

- El proyecto no incluye un proceso de build; para producción puedes minificar manualmente CSS/JS o implementar un workflow con Gulp/webpack.
- La mayoría de los recursos se cargan desde CDN; puedes cambiarlo a locales si prefieres.
- Para integrar APIs (Instagram/Facebook) necesitas tokens válidos y cuentas de negocio.

## 📡 Contacto

Para coordinar cambios o colaboraciones, ponte en contacto con el equipo a través de la sección de **Contacto** del sitio o envía un correo a `info@tijuanainnovadora.com`.

---

_Documento generado automáticamente el 2 de marzo de 2026._