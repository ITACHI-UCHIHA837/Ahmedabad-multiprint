// Mobile menu toggle (simple implementation)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Basic toggle for demonstration
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0a0a0a';
        navLinks.style.padding = '20px 0';
        navLinks.style.textAlign = 'center';
    }
});

// Form submission handler
const footerForm = document.querySelector('.footer-form');

if(footerForm) {
    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out to Ahmedabad Multiprint. We will get back to you shortly.');
        footerForm.reset();
    });
}