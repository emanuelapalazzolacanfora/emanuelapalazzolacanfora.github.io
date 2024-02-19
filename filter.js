function filterItems(category) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
      item.style.display = 'none';
      if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
      }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner tous les boutons
  const buttons = document.querySelectorAll('.projects-btn');

  buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (!this.classList.contains('btn__active')) {
          // Retirer la classe "active" de tous les boutons
          buttons.forEach(function (btn) {
            btn.classList.remove('btn__active');
          });
  
          // Ajouter la classe "active" au bouton actuel
          this.classList.add('btn__active');
        }
      });
    });
  });