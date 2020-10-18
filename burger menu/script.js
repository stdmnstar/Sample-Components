const menuIcon = document.querySelector(".burger-menu__button");
const navbar = document.querySelector(".burger-menu");
const overlay = document.querySelector(".burger_menu_overlay");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle ("burger-menu_active");
});

overlay.addEventListener("click", () => {
    navbar.classList.toggle ("burger-menu_active");
});