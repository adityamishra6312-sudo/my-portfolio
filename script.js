// Mobile Navigation
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");
}


// Dark / Light Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const themeBtn = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}


// Scroll Animation
const sections = document.querySelectorAll("#about, #skills, #contact");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            } else {
                entry.target.classList.remove("show-section");
            }

        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formFields = contactForm.querySelectorAll("input, textarea");

formFields.forEach((field) => {
    field.addEventListener("input", function () {
        formMessage.textContent = "";
    });
});

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "") {
        formMessage.textContent = "❌ Please enter your name.";
        formMessage.style.color = "red";
        return;
    }

    if (email === "") {
        formMessage.textContent = "❌ Please enter your email.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "❌ Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    if (message === "") {
        formMessage.textContent = "❌ Please enter your message.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.style.color = "green";

    contactForm.reset();
});