# Proyecto Tijuana Innovadora 2.0

Sitio web estático de **Tijuana Innovadora**, movimiento ciudadano que promueve el arte, la ciencia, la tecnología y el liderazgo en la región fronteriza de Tijuana, México.

**Hosting:** HostGator (shared hosting PHP + Apache) · **Admin:** cPanel · **Deploy:** GitHub

---

## Estructura del proyecto

```
TijuanaInnovadora2.0/
├─ index.html                        # Página principal
├─ .htaccess                         # Compresión, caché, headers de seguridad
├─ .gitignore                        # Excluye node_modules/
├─ package.json                      # Dependencias de build (Tailwind CLI)
├─ tailwind.config.js                # Configuración de Tailwind (colores, fuentes)
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
    └─ styles/
        ├─ tailwind-input.css        # Entrada para el compilador de Tailwind
        ├─ tailwind.css              # CSS compilado (generado — no editar a mano)
        ├─ global.css                # Reset y estilos base del sitio
        ├─ fonts.css                 # Declaraciones @font-face
        └─ social-carousel.css       # Estilos del carrusel de redes sociales
```

---

## Inicio rápido (local)

1. Clona el repositorio dentro del directorio raíz de MAMP/Apache.
2. Instala las dependencias de build (solo necesario una vez):
   ```bash
   npm install
   ```
3. Accede a `http://localhost/TijuanaInnovadora2.0/`.
4. No requiere base de datos.

---

## Compilar Tailwind CSS

El sitio usa Tailwind CSS compilado localmente. El archivo `src/styles/tailwind.css` se genera a partir de `src/styles/tailwind-input.css` y se sube al repo para que HostGator lo sirva como archivo estático.

```bash
# Compilar para producción (minificado)
npm run build:css

# Modo watch durante desarrollo (recompila al guardar)
npm run watch:css
```

**Importante:** ejecutar `npm run build:css` antes de cada deploy si se agregaron clases nuevas de Tailwind. El archivo `node_modules/` está en `.gitignore` y no se sube al servidor.

---

## Dependencias

### CDN (cargadas en el browser)

| Librería | Carga | Uso |
|---|---|---|
| Swiper.js 11 | `defer` | Carruseles |
| AOS 2.3.4 | `defer` | Animaciones al hacer scroll |
| Alpine.js 3 | `defer` | Reactividad ligera (galerías, lightbox) |
| Font Awesome 6.5 | async | Iconos |
| Animate.css 4.1 | async | Clases de animación CSS |

### Build (solo local)

| Paquete | Uso |
|---|---|
| `tailwindcss` ^3.4 | Compilar `tailwind.css` |

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
- `defer` en Swiper JS, AOS y Alpine.js para no bloquear el renderizado.
- CSS no crítico cargado de forma asíncrona con `media="print" onload="this.media='all'"`:
  - Font Awesome, Animate.css, AOS CSS, `fonts.css`, `social-carousel.css`
- CSS crítico render-blocking (mínimo necesario): `tailwind.css`, `global.css`, Swiper CSS (hero).
- `<link rel="preconnect">` para Cloudinary, cdnjs, unpkg, jsDelivr.
- Preload del hero image correcto en cada página.
- Tailwind CSS compilado localmente (sin Play CDN en producción).
- `.htaccess` configurado con:
  - Compresión Gzip (HTML, CSS, JS, fuentes, SVG)
  - Caché del browser: imágenes/fuentes 1 año · CSS/JS 1 semana · HTML 1 hora
  - Keep-Alive activo

---

## SEO

- Metadescripciones, Open Graph y Twitter Cards en cada página.
- `aria-label` en todos los vínculos de iconos (redes sociales, correo) y en CTAs con texto genérico.
- `alt` descriptivo en todas las imágenes.
- JSON-LD estructurado en `eventos/index.html`.
- `sitemap.xml` y `robots.txt` listos para Google Search Console.
- URLs canónicas configuradas por página.
- Embeds de YouTube via `youtube-nocookie.com` para reducir cookies de terceros.

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
- [ ] Implementar `trustedTypes` para eliminar el uso de `innerHTML` en los carruseles sociales.
- [ ] Reemplazar el iframe de Google Forms con un botón que lo cargue bajo demanda para eliminar las 2 cookies de terceros restantes.

---

## Contacto

`info@tijuanainnovadora.com` · [tijuanainnovadora.org](https://www.tijuanainnovadora.org)

---

_Actualizado: junio 2026_
