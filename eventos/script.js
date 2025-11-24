(function () {
    const html = document.documentElement;
    const btnOpen = document.getElementById("btn-menu");
    const btnClose = document.getElementById("btn-close");
    const overlay = document.getElementById("overlay");
    const panel = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");

    const openMenu = () => {
        panel.classList.remove("translate-x-full");
        overlay.classList.remove("invisible");
        requestAnimationFrame(() => overlay.classList.add("opacity-100"));
        btnOpen.setAttribute("aria-expanded", "true");
        iconOpen.classList.add("hidden");
        iconClose.classList.remove("hidden");
        // bloquear scroll
        html.style.overflow = "hidden";
    };

    const closeMenu = () => {
        panel.classList.add("translate-x-full");
        overlay.classList.add("opacity-0");
        overlay.addEventListener(
            "transitionend",
            () => overlay.classList.add("invisible"),
            { once: true }
        );
        btnOpen.setAttribute("aria-expanded", "false");
        iconClose.classList.add("hidden");
        iconOpen.classList.remove("hidden");
        // habilitar scroll
        html.style.overflow = "";
    };

    // Abrir / cerrar
    btnOpen.addEventListener("click", () => {
        const expanded = btnOpen.getAttribute("aria-expanded") === "true";
        expanded ? closeMenu() : openMenu();
    });
    btnClose.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // Cerrar con ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // Cerrar al hacer click en un enlace del panel
    panel.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", closeMenu);
    });
})();
document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll (usa #navbar solo si existe)
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("navbar-bg-dark", window.scrollY > 30);
            navbar.classList.toggle("navbar-bg-light", window.scrollY <= 30);
        });
    }

    // Dropdown ARIA toggle (si decides clic además de hover)
    const btnEsferas = document.getElementById("btn-esferas");
    const panelEsferas = btnEsferas?.nextElementSibling;
    if (btnEsferas && panelEsferas) {
        btnEsferas.addEventListener("click", (e) => {
            e.stopPropagation();
            const open = panelEsferas.classList.contains("invisible");
            btnEsferas.setAttribute("aria-expanded", String(open));
            panelEsferas.classList.toggle("invisible");
            panelEsferas.classList.toggle("opacity-0");
            panelEsferas.classList.toggle("translate-y-1");
        });
        document.addEventListener("click", () => {
            if (!panelEsferas.classList.contains("invisible")) {
                panelEsferas.classList.add(
                    "invisible",
                    "opacity-0",
                    "translate-y-1"
                );
                btnEsferas.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Quitar inits de Swiper si no hay contenedores .heroSwiper/.portafolioSwiper
    // (ya lo haces con el check, bien)
});
document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector(".impactSwiper");
    if (el && typeof Swiper !== "undefined") {
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
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".patrocinadoresSwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });
});

function changeGallery(year) {
    const gallery = document.getElementById("timeline-gallery");
    gallery.style.opacity = 0;
    setTimeout(() => {
        gallery.innerHTML = `
        <img loading="lazy" src="../src/assets/images/${year}.webp" alt="Foto de ${year}" class="rounded-xl shadow-xl w-full max-h-[500px] object-cover mx-auto">
      `;
        gallery.style.opacity = 1;
    }, 300);
}
let swiper;

function changeGallery(year) {
    const gallery = document.getElementById("timeline-gallery");
    gallery.style.opacity = 0;

    setTimeout(() => {
        gallery.innerHTML = `
        <div class="swiper mySwiper w-full max-w-4xl mx-auto">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img loading="lazy" src="../src/assets/images/${year}.webp" class="rounded-xl shadow-xl object-cover w-full max-h-[500px]"/>
            </div>
            <div class="swiper-slide">
              <img loading="lazy" src="../src/assets/images/${year}.webp" class="rounded-xl shadow-xl object-cover w-full max-h-[500px]"/>
            </div>
            <div class="swiper-slide">
              <img loading="lazy" src="../src/assets/images/${year}.webp" class="rounded-xl shadow-xl object-cover w-full max-h-[500px]"/>
            </div>
          </div>
          <div class="swiper-pagination mt-4"></div>
        </div>
      `;

        // Reinit swiper
        setTimeout(() => {
            swiper = new Swiper(".mySwiper", {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            });
            gallery.style.opacity = 1;
        }, 50);
    }, 300);
}

// Inicializar el primer año
window.onload = () => changeGallery(2010);

function openModal({ img, title, desc, link }) {
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-img").alt = title;
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-desc").textContent = desc;
    document.getElementById("modal-link").href = link;
    document.getElementById("cta-modal").classList.remove("hidden");
}

// Cerrar modal con botón o click fondo
document.getElementById("close-modal").onclick = function () {
    document.getElementById("cta-modal").classList.add("hidden");
};
document.getElementById("cta-modal").onclick = function (e) {
    if (e.target === this) this.classList.add("hidden");
};
// Cerrar con ESC
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape")
        document.getElementById("cta-modal").classList.add("hidden");
});
