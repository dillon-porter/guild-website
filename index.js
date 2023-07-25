const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

// Smooth scrolling for navbar links and buttons //

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
    const theme = localStorage.getItem("theme") || "light";
    body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
}


// Add a script to show/hide the arrow button based on scroll position
const backToTopBtn = document.querySelector('.back-to-top-btn');
const charterSection = document.getElementById('charter');
const charterSectionOffset = charterSection.offsetTop;

function updateBackToTopButtonVisibility() {
    if (window.scrollY > charterSectionOffset) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

window.addEventListener('scroll', updateBackToTopButtonVisibility);

// Call the function once on page load to initialize the button's visibility
updateBackToTopButtonVisibility();

// Add a script to handle scrolling to top when the "Back to Top" button is clicked
let scrollTimeout;

function onScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateBackToTopButtonVisibility, 100);
}

window.addEventListener('scroll', onScroll);