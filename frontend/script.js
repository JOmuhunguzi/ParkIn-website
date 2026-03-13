// scroll animations
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            offset: 50
        });
    }
});

// scrolling navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// hover effects for service cards
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-5px)";
        this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    
    card.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
    });
});

// Lazy load images for better performance
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
});

// After scroll navbar styling
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "rgba(247, 211, 207, 0.95)";
            nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            nav.style.backgroundColor = "transparent";
            nav.style.boxShadow = "none";
        }
    }
});

// Handle logo click to go to home
const logo = document.querySelector(".logo");
if (logo) {
    logo.addEventListener("click", function() {
        const homeSection = document.getElementById("Home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// responsive menu toggle for mobile
function createMobileMenu() {
    const nav = document.querySelector("nav");
    if (nav && window.innerWidth <= 768) {
        const menuBtn = document.createElement("button");
        menuBtn.className = "mobile-menu-btn";
        menuBtn.innerHTML = "☰";
        menuBtn.style.display = "none";
        
        nav.appendChild(menuBtn);
        
        menuBtn.addEventListener("click", function() {
            const navLinks = nav.querySelectorAll("a:not(.logo a)");
            navLinks.forEach(link => {
                link.style.display = link.style.display === "block" ? "none" : "block";
            });
        });
    }
}

// Initializing mobile menu on load and resize
window.addEventListener("load", createMobileMenu);
window.addEventListener("resize", createMobileMenu);

// Add loading animation for page
window.addEventListener("load", function() {
    document.body.style.opacity = "1";
});

// Preload critical images
function preloadImages() {
    const images = [
        "images/icon.png",
        "images/download (3).jpg",
        "images/images.jpg",
        "images/download(6).jpg",
        "images/download.jpg"
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();
