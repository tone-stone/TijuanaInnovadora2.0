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
