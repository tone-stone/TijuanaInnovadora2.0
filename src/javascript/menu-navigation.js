(function () {
    const html = document.documentElement;
    const buttonMenu = document.getElementById("btn-menu");
    const buttonClose = document.getElementById("btn-close");
    const mobileMenuPanel = document.getElementById("mobile-menu");
    const openIcon = document.getElementById("icon-open");
    const closeIcon = document.getElementById("icon-close");

    const openMenu = () => {
        mobileMenuPanel.classList.remove("translate-x-full");

        buttonMenu.setAttribute("aria-expanded", "true");
        openIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        html.style.overflow = "hidden";
    };

    const closeMenu = () => {
        mobileMenuPanel.classList.add("translate-x-full");

        buttonMenu.setAttribute("aria-expanded", "false");
        closeIcon.classList.add("hidden");
        openIcon.classList.remove("hidden");
        html.style.overflow = "";
    };

    buttonMenu.addEventListener("click", () => {
        const expanded = buttonMenu.getAttribute("aria-expanded") === "true";
        expanded ? closeMenu() : openMenu();
    });
    
    buttonClose.addEventListener("click", closeMenu);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    mobileMenuPanel.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", closeMenu);
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("navbar-bg-dark", window.scrollY > 30);
            navbar.classList.toggle("navbar-bg-light", window.scrollY <= 30);
        });
    }

    const buttonSpheres = document.getElementById("btn-esferas");
    const mobileMenuSpheresPanel = buttonSpheres?.nextElementSibling;

    if (buttonSpheres && mobileMenuSpheresPanel) {
        buttonSpheres.addEventListener("click", (e) => {
            e.stopPropagation();
            const open = mobileMenuSpheresPanel.classList.contains("invisible");
            buttonSpheres.setAttribute("aria-expanded", String(open));
            mobileMenuSpheresPanel.classList.toggle("invisible");
            mobileMenuSpheresPanel.classList.toggle("opacity-0");
            mobileMenuSpheresPanel.classList.toggle("translate-y-1");
        });

        document.addEventListener("click", () => {
            if (!mobileMenuSpheresPanel.classList.contains("invisible")) {
                mobileMenuSpheresPanel.classList.add(
                    "invisible",
                    "opacity-0",
                    "translate-y-1"
                );
                buttonSpheres.setAttribute("aria-expanded", "false");
            }
        });
    }
});
