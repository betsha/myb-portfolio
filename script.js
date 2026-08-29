// ============================================
// script.js - Highlights the active page in the menu
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get the current file name (e.g., "about.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Find all the navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Loop through each link
    navLinks.forEach(link => {
        // If the link's href matches the current page, add the "active" class
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});