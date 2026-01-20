document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    // Note: In a full implementation we would toggle a class on a mobile menu container
    // For this simple landing page, let's just log it or add a basic alert for demo
    menuBtn.addEventListener('click', () => {
        alert('Menú móvil sería desplegado aquí.');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                alert('¡Gracias! Tu mensaje ha sido recibido. Me pondré en contacto contigo pronto.');
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1000);
        });
    }
});
