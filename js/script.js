// Active link management
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Ne pas empêcher la navigation par défaut
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
        if (href === currentPage || href === '../' + currentPage || href === '../../' + currentPage) {
            link.classList.add('active');
        }
    });
});