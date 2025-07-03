function setActiveNavLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        // Remove .active from all links
        link.classList.remove('active');
        // Add .active only to the current page link
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
}

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
    setActiveNavLink();
}

// After header is loaded, set active nav link
if (typeof setActiveNavLink !== 'function') {
  window.setActiveNavLink = setActiveNavLink;
}

document.addEventListener('DOMContentLoaded', () => {
    // Only call initMenuToggle if header is already present (e.g., not dynamically loaded)
    if (document.querySelector('.menu-toggle') && document.querySelector('nav')) {
        initMenuToggle();
        setActiveNavLink();
    }
    // If header is loaded dynamically, setActiveNavLink will be called after injection
});
