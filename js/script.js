// Gestion des accordéons
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        
        // Fermer tous les autres accordéons
        document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            if (activeItem !== item) {
                activeItem.classList.remove('active');
            }
        });
        
        // Toggle l'accordéon actuel
        item.classList.toggle('active');
    });
});

// Active link management
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Search functionality (optional)
document.querySelector('.search-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Fonction de recherche à implémenter');
});

// Set active link based on current page
window.addEventListener('load', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || href === '../index.html') {
            link.classList.add('active');
        }
    });
});
