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

