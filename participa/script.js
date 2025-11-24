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
