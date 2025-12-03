const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    mobileMenu.classList.toggle("active");
});

// CLOSE MENU WHEN LINK CLICKED
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileMenu.classList.remove("active");
    });
});
