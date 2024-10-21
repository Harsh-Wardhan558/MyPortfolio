// Toggle menu visibility
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Typed.js setup for the "And I'm a" text
const options = {
    strings: ["Web Developer", "Designer", "Content Creator"], // Add your roles here
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
};

const typed = new Typed('.multiple-text', options);

// ScrollReveal for animations on scroll
ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

ScrollReveal().reveal('.home-content, .about-content, .services-container, .portfolio-container, .contact form', {
    interval: 200
});
