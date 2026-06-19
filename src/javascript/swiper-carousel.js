// Esperar a que Swiper esté disponible
function initSwiperCarousels() {
    // Carrusel del Banner Principal — inicializar primero, en el frame actual
    const bannerEl = document.querySelector(".banner-swiper");
    if (bannerEl && typeof Swiper !== "undefined") {
        new Swiper(".banner-swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".banner-swiper .swiper-pagination",
                clickable: true,
            },
            speed: 800,
        });
    }

    // Carrusel de Impacto — lazy init con IntersectionObserver (está debajo del fold en móvil)
    const impactEl = document.querySelector(".impactSwiper");
    if (impactEl && typeof Swiper !== "undefined") {
        const impactObserver = new IntersectionObserver(function(entries) {
            if (!entries[0].isIntersecting) return;
            impactObserver.disconnect();
            requestAnimationFrame(function() {
                new Swiper(".impactSwiper", {
                    slidesPerView: 1.15,
                    spaceBetween: 30,
                    loop: true,
                    centeredSlides: true,
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    },
                    pagination: {
                        el: ".impactSwiper .swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".impactSwiper .swiper-button-next",
                        prevEl: ".impactSwiper .swiper-button-prev",
                    },
                });
            });
        }, { threshold: 0.1 });
        impactObserver.observe(impactEl);
    }

    // Carrusel de noticias completas
    const newsEl = document.querySelector(".newsSwiper");
    if (newsEl && typeof Swiper !== "undefined") {
        const newsSwiper = new Swiper(".newsSwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
            loop: false,
            autoHeight: true,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            hashNavigation: {
                watchState: true,
            },
            navigation: {
                nextEl: ".news-button-next",
                prevEl: ".news-button-prev",
            },
            breakpoints: {
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
            on: {
                init: function() {
                    updateSlideNumbers(this);
                },
                slideChange: function() {
                    updateSlideNumbers(this);
                }
            }
        });

        // Función para actualizar números de slides
        function updateSlideNumbers(swiper) {
            const activeIndex = swiper.activeIndex + 1;
            const total = swiper.slides.length;
            const counterEl = document.getElementById('slide-counter');
            const mobileCounterEl = document.getElementById('slide-counter-mobile');
            if (counterEl) {
                counterEl.textContent = `${activeIndex}/${total}`;
            }
            if (mobileCounterEl) {
                mobileCounterEl.textContent = `${activeIndex}/${total}`;
            }
        }

        // Función de filtrado
        function filterNews() {
            const nombreFilter = document.getElementById('filter-nombre').value.toLowerCase();
            const esferaFilter = document.getElementById('filter-esfera').value.toLowerCase();
            const fechaFilter = document.getElementById('filter-fecha').value;

            const slides = newsSwiper.slides;
            let visibleCount = 0;

            // Leer todos los datos primero para evitar lecturas/escrituras alternadas
            const slideData = Array.from(slides).map(slide => {
                const titleEl = slide.querySelector('h2');
                const esferaEl = slide.querySelector('span.text-sm.font-bold.text-accent.uppercase');
                const fechaEl = slide.querySelector('p.text-gray-500.text-sm');
                return {
                    slide,
                    title: titleEl ? titleEl.textContent.toLowerCase() : '',
                    esfera: esferaEl ? esferaEl.textContent.split(' · ')[0].toLowerCase() : '',
                    fecha: fechaEl ? fechaEl.textContent.match(/(\d{4})/)?.[1] || '' : '',
                };
            });

            // Luego escribir todo de una vez
            slideData.forEach(({ slide, title, esfera, fecha }) => {
                const matchesNombre = !nombreFilter || title.includes(nombreFilter);
                const matchesEsfera = !esferaFilter || esfera.includes(esferaFilter);
                const matchesFecha = !fechaFilter || fecha === fechaFilter;

                if (matchesNombre && matchesEsfera && matchesFecha) {
                    slide.style.display = 'block';
                    visibleCount++;
                } else {
                    slide.style.display = 'none';
                }
            });

            // Si no hay slides visibles, mostrar mensaje
            const wrapper = newsSwiper.wrapperEl;
            const noResultsEl = wrapper.querySelector('.no-results');
            if (visibleCount === 0) {
                if (!noResultsEl) {
                    const el = document.createElement('div');
                    el.className = 'no-results swiper-slide text-center py-12';
                    el.innerHTML = '<p class="text-gray-500 text-lg">No se encontraron noticias que coincidan con los filtros.</p>';
                    wrapper.appendChild(el);
                }
            } else {
                if (noResultsEl) {
                    noResultsEl.remove();
                }
            }

            // Diferir la actualización de Swiper al siguiente frame para evitar reflow forzado
            requestAnimationFrame(() => {
                updateSlideNumbers(newsSwiper);
                newsSwiper.update();
            });
        }

        // Event listeners para filtros
        document.getElementById('filter-nombre').addEventListener('input', filterNews);
        document.getElementById('filter-esfera').addEventListener('change', filterNews);
        document.getElementById('filter-fecha').addEventListener('change', filterNews);
        document.getElementById('clear-filters').addEventListener('click', function() {
            document.getElementById('filter-nombre').value = '';
            document.getElementById('filter-esfera').value = '';
            document.getElementById('filter-fecha').value = '';
            filterNews();
        });

        // Inicializar carruseles de fotos dentro de artículos
        const photoSwipers = document.querySelectorAll('.article-photos-swiper');
        photoSwipers.forEach((photoSwiper) => {
            new Swiper(photoSwiper, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                autoHeight: true,
                pagination: {
                    el: photoSwiper.querySelector('.swiper-pagination'),
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: photoSwiper.querySelector('.article-photos-next'),
                    prevEl: photoSwiper.querySelector('.article-photos-prev'),
                },
                breakpoints: {
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                },
            });
        });
    }
}

// Diferir la inicialización al siguiente frame para evitar reflow forzado en el critical path
function scheduleInit() {
    requestAnimationFrame(initSwiperCarousels);
}

// Intentar inicializar cuando Swiper esté listo
if (typeof Swiper !== "undefined") {
    // Swiper ya está cargado
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", scheduleInit);
    } else {
        // DOM ya está listo
        scheduleInit();
    }
} else {
    // Esperar a que Swiper se cargue
    let attempts = 0;
    const maxAttempts = 50;
    const waitForSwiper = setInterval(() => {
        if (typeof Swiper !== "undefined") {
            clearInterval(waitForSwiper);
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", scheduleInit);
            } else {
                scheduleInit();
            }
        }
        attempts++;
        if (attempts >= maxAttempts) {
            clearInterval(waitForSwiper);
            console.warn("Swiper no se cargó correctamente después de 5 segundos");
        }
    }, 100);
}
