// Fonction pour attribuer la valeur de --i aux liens au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les liens avec la classe .menu-animation
    var liens = document.querySelectorAll('.menu-animation');

    // Parcourez chaque lien et attribuez la valeur --i
    liens.forEach(function (lien, index) {
        lien.style.setProperty('--i', index);
    });
});
