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
