function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Only call initMenuToggle if header is already present (e.g., not dynamically loaded)
    if (document.querySelector('.menu-toggle') && document.querySelector('nav')) {
        initMenuToggle();
    }
});
