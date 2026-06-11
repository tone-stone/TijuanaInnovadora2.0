# Proyecto Tijuana Innovadora 2.0

Sitio web estático de **Tijuana Innovadora**, movimiento ciudadano que promueve el arte, la ciencia, la tecnología y el liderazgo en la región fronteriza de Tijuana, México.

**Hosting:** HostGator (shared hosting PHP + Apache) · **Admin:** cPanel · **Deploy:** GitHub

---

## Estructura del proyecto

```
TijuanaInnovadora2.0/
├─ index.html                        # Página principal
├─ .htaccess                         # Compresión, caché, headers de seguridad
├─ sitemap.xml                       # Mapa del sitio para buscadores
├─ robots.txt                        # Directivas para crawlers
├─ quienes-somos/
├─ eventos/
├─ noticias/
├─ participa/
├─ contacto/
├─ publicaciones/                    # Carrusel de redes sociales
├─ esferas-proyectos/
│   ├─ arte-industria/
│   ├─ casa-ideas/
│   ├─ innovamoda/
│   ├─ lideres/
│   ├─ paseo-fama/
│   ├─ sinfonica-juvenil/
│   └─ tijuana-verde/
└─ src/
    ├─ assets/                       # Imágenes locales, fuentes, PDFs de revistas
    ├─ javascript/                   # Scripts de interacción
    └─ styles/                       # CSS globales y de fuentes
```

---

## Inicio rápido (local)

1. Clona el repositorio dentro del directorio raíz de MAMP/Apache.
2. Accede a `http://localhost/TijuanaInnovadora2.0/`.
3. No requiere base de datos ni proceso de build.

---

## Dependencias (CDN)

| Librería | Uso |
|---|---|
| Tailwind CSS (Play CDN) | Utilidades de diseño |
| Swiper.js 11 | Carruseles |
| AOS 2.3.4 | Animaciones al hacer scroll |
| Alpine.js 3 | Reactividad ligera (galerías, lightbox) |
| Font Awesome 6.5 | Iconos |
| Animate.css 4.1 | Clases de animación CSS |

> Los scripts de AOS y Swiper se cargan con `defer` para no bloquear el renderizado inicial.

---

## Imágenes y video

- Las imágenes del sitio se alojan en **Cloudinary** (cuentas `dxxtlfbb4` y `db1xdn8rq`).
- Las URLs incluyen transformaciones automáticas: `w_600,q_auto,f_auto` para miniaturas de galerías.
- Los videos de banner usan la etiqueta `<video>` nativa con `autoplay muted loop playsinline`.
- Las imágenes locales en `src/assets/images/noticias/` son archivos de cámara sin comprimir; se recomienda subirlos a Cloudinary antes de agregar nuevas notas.

---

## Performance

Optimizaciones aplicadas en todas las páginas:

- `loading="lazy"` en todas las imágenes fuera del viewport inicial.
- `defer` en AOS, Swiper y todos los scripts externos del `<head>`.
- `<link rel="preconnect">` declarado al inicio del `<head>` para Cloudinary, CDNs y Tailwind.
- Preload del hero image correcto en cada página.
- `.htaccess` configurado con:
  - Compresión Gzip (HTML, CSS, JS, fuentes, SVG)
  - Caché del browser: imágenes/fuentes 1 año · CSS/JS 1 semana · HTML 1 hora
  - Keep-Alive activo

---

## SEO

- Metadescripciones, Open Graph y Twitter Cards en cada página.
- `aria-label` en todos los vínculos de iconos (redes sociales, correo).
- `alt` descriptivo en todas las imágenes.
- JSON-LD estructurado en `eventos/index.html`.
- `sitemap.xml` y `robots.txt` listos para Google Search Console.
- URLs canónicas configuradas por página.

---

## Seguridad (headers HTTP via `.htaccess`)

| Header | Valor |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `Content-Security-Policy` | Lista blanca de CDNs, Cloudinary, YouTube nocookie y Google Forms |
| `Cross-Origin-Opener-Policy` | `same-origin-allow-popups` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Desactiva cámara, micrófono, geolocalización y pagos |

Los embeds de YouTube usan `youtube-nocookie.com` para reducir cookies de terceros.

---

## Carrusel de redes sociales

Componente reutilizable con soporte para APIs de Instagram y Facebook.

Archivos clave:
- `src/javascript/social-carousel.js` — lógica principal
- `src/javascript/social-carousel-manager.js` — APIs, caché
- `src/javascript/social-carousel-config.js` — configuración de posts
- `src/styles/social-carousel.css` — estilos
- `publicaciones/index.html` — implementación completa

Documentación extendida: `SOCIAL_CAROUSEL_README.md` · `INTEGRACION_CARRUSEL.html`

---

## Pendientes recomendados

- [ ] Subir imágenes de noticias locales (`.JPG` de cámara) a Cloudinary y actualizar rutas.
- [ ] Compilar Tailwind CSS localmente y reemplazar el Play CDN por un archivo estático — mejora significativa de rendimiento.
- [ ] Implementar `trustedTypes` para eliminar el uso de `innerHTML` en los carruseles sociales.
- [ ] Reemplazar el iframe de Google Forms con un botón que lo cargue bajo demanda para eliminar las 2 cookies de terceros restantes.

---

## Contacto

`info@tijuanainnovadora.com` · [tijuanainnovadora.org](https://www.tijuanainnovadora.org)

---

_Actualizado: junio 2026_
