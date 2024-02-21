document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelector('.carousel-items');
    const slideWidth = document.querySelector('.carousel-item').clientWidth;
    let currentIndex = 0;
  
    function updateButtons() {
      const prevBtn = document.querySelector('.carousel-btn:nth-child(1)');
      const nextBtn = document.querySelector('.carousel-btn:nth-child(2)');
  
      if (prevBtn && nextBtn) {
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex === slides.children.length - 1);
      }
    }
  
    window.prevSlide = function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }
  
    window.nextSlide = function() {
      const screenWidth = window.innerWidth;
  
      if (screenWidth > 768) {
        // Pour les écrans > 768px, permettre de naviguer jusqu'à l'avant-dernière diapositive
        if (currentIndex < slides.children.length - 2) {
          currentIndex++;
          updateCarousel();
        }
      } else {
        // Pour les écrans <= 768px, permettre de naviguer jusqu'à la dernière diapositive
        if (currentIndex < slides.children.length - 1) {
          currentIndex++;
          updateCarousel();
        }
      }
    }
  
    function updateCarousel() {
      slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      updateButtons();
    }
  
    updateButtons(); // Initialiser l'état des boutons
  
    // Ajouter des écouteurs d'événements aux boutons
    const prevBtn = document.querySelector('.carousel-btn:nth-child(1)');
    const nextBtn = document.querySelector('.carousel-btn:nth-child(2)');
  
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
    }
  });
  
