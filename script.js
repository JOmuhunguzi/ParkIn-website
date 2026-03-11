// script.js

// --- Modal Functionality ---
const modal = document.getElementById("authModal");
const loginForm = document.getElementById("LoginForm");
const registerForm = document.getElementById("registerForm");

const openBtn = document.getElementById("openModalBtn");
const closeBtnLogin = document.getElementById("closeModal");
const closeBtnRegister = document.getElementById("closeModal2");

const toRegister = document.getElementById("toRegister");
const toLogin = document.getElementById("toLogin");

// Open modal with Login form
openBtn.onclick = () => {
    modal.style.display = "block";
    loginForm.style.display = "block";
    registerForm.style.display = "none";
};

// Close Login form
closeBtnLogin.onclick = () => {
    modal.style.display = "none";
};

// Close Register form
closeBtnRegister.onclick = () => {
    modal.style.display = "none";
};

// Switch to Register form
toRegister.onclick = () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
};

// Switch back to Login form
if (toLogin) {
    toLogin.onclick = () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    };
}

// Close modal if click outside content
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// --- Contact Form Validation ---
const contactForm = document.querySelector("#Contact form");
contactForm.addEventListener("submit", function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before sending your message.");
        e.preventDefault(); // prevent submission
    } else {
        alert("Message sent successfully!");
    }
});

// --- Smooth scroll for nav links ---
document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
