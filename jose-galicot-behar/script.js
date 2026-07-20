// Lightbox para Reconocimientos
function openLightbox(el) {
    const img = el.querySelector('img');
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-img').alt = img.alt;
    const pdfLink = document.getElementById('lightbox-pdf');
    const pdf = img.getAttribute('data-pdf');
    if (pdfLink) {
        if (pdf) {
            pdfLink.href = pdf;
            pdfLink.classList.remove('hidden');
        } else {
            pdfLink.classList.add('hidden');
        }
    }
    document.getElementById('lightbox').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function openReconocimiento(event, el) {
    event.preventDefault();
    openLightbox(el);
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = '';
}

// Modal de artículos (Visión)
function openArticulo({ title, images, body }) {
    const modal = document.getElementById('articulo-modal');
    document.getElementById('articulo-title').textContent = title;

    const imagesEl = document.getElementById('articulo-images');
    imagesEl.innerHTML = (images || [])
        .map(
            (src) =>
                `<img src="${src}" alt="${title}" class="w-full h-40 md:h-52 object-cover rounded-xl shadow" />`
        )
        .join('');

    const bodyEl = document.getElementById('articulo-body');
    bodyEl.innerHTML = (body || []).map((p) => `<p>${p}</p>`).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeArticulo() {
    const modal = document.getElementById('articulo-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeArticulo();
        const cta = document.getElementById('cta-modal');
        if (cta) cta.classList.add('hidden');
    }
});

// Swiper para Visión
document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.vision-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: { delay: 4500, disableOnInteraction: false },
            pagination: {
                el: '.vision-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.vision-swiper .swiper-button-next',
                prevEl: '.vision-swiper .swiper-button-prev',
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }
});
