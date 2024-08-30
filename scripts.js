document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

  
    // Testimonial carousel
    const testimonials = document.querySelectorAll('.testimonial');
    let testimonialIndex = -1;

    setInterval(() => {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.transform = `translateX(${+100 * testimonialIndex}%)`;
        });
        testimonialIndex = (testimonialIndex + 1) % (testimonials.length);
    }, 4000);

    // Contact form submission
    const contactForm = document.getElementById('form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        contactForm.reset();
    });
});