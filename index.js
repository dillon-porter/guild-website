const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

// Smooth scrolling for navbar links and buttons
const navLinks = document.querySelectorAll(".nav-links, .nav-links-btn");

navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    });
});

function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
}

// Check the theme preference from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
});