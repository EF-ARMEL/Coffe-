const menu = document.querySelectorAll("#headIcon")[1];
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menu.textContent = "close";
    } else {
        menu.textContent = "menu";
    }
});
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;

// suivre la souris
window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
// Initialisation du Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Configuration de base
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 100,
        grabCursor: true,

        // Effet coverflow
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 50,
            depth: 200,
            modifier: 1.2,
            slideShadows: true,
        },

        // Configuration responsive
        breakpoints: {
            304: {
                slidesPerView: 1,
                spaceBetween: 5,
            },

            552: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
            },
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    });
});