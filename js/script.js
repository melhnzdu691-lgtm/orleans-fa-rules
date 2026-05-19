// Gestion des accordéons
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        
        // Ferme les autres accordéons
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('active');
            }
        });
        
        // Toggle l'accordéon courant
        content.classList.toggle('active');
    });
});