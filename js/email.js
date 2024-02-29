function generateEmailLinks() {
    var user = "emanuela.palazzo.lacanfora";
    var domain = "gmail.com";
    var subject = "MON ART";
    
    // Génération dynamique de l'adresse e-mail avec une méthode complexe
    var dynamicEmail = generateDynamicEmail(user, domain);

    // Sélectionnez tous les éléments avec la classe 'emailLink'
    var emailLinks = document.querySelectorAll('.emailLink');

    // Appliquez le lien 'mailto' à tous les éléments
    emailLinks.forEach(function(link) {
      var mailtoLink = 'mailto:' + dynamicEmail + '?subject=' + encodeURIComponent(subject);
      link.setAttribute("href", mailtoLink);
    });
  }

  // Fonction pour générer dynamiquement l'adresse e-mail avec une méthode complexe
  function generateDynamicEmail(user, domain) {
    // Mettez en œuvre votre propre logique de génération ici, par exemple, mélangez les caractères, ajoutez des éléments supplémentaires, etc.
    var shuffledUser = shuffleString(user);
    var shuffledDomain = shuffleString(domain);
    
    return shuffledUser + "@" + shuffledDomain;
  }

  // Fonction pour mélanger les caractères d'une chaîne de manière aléatoire
  function shuffleString(str) {
    var arr = str.split('');
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr.join('');
  }

  window.onload = generateEmailLinks;