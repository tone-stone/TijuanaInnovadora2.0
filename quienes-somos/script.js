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
              <img loading="lazy" src="../src/assets/images/${year}-1.webp" class="rounded-xl shadow-xl object-cover w-full max-h-[500px]"/>
            </div>
            <div class="swiper-slide">
              <img loading="lazy" src="../src/assets/images/${year}-2.webp" class="rounded-xl shadow-xl object-cover w-full max-h-[500px]"/>
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

