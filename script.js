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