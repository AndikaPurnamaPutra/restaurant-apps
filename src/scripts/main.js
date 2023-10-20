// logic respondsive
const navbar = document.getElementById("nav");
const btnRes = document.querySelector(".btn-nav-responsive");
const menu = document.querySelector(".navbar-menu");

btnRes.addEventListener("click", () => {
    menu.classList.toggle("active");
    btnRes.classList.toggle("cross");
    navbar.classList.toggle("active");
});