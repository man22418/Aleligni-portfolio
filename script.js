// 1. Dark and Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌞";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// 2. Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields!";
        return;

    }

    // Check email
    if (!email.includes("@") || !email.includes(".")) {

        formMessage.textContent = "Please enter a valid email!";
        return;

    }

    // Success message
    formMessage.textContent =
        "Thank you " + name + "! Your message is ready.";

    contactForm.reset();

});
// Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✖";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});