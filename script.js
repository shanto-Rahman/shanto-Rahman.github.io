document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) { // Ensure elements exist before adding event listener
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active'); // This class will control visibility in CSS
            menuToggle.classList.toggle('active'); // Optional: change icon (e.g., to 'X')
        });

        // Optional: Close menu when a link is clicked (for single-page navigation)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
});
