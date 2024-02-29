// Fonction pour générer des liens e-mail dynamiques
function generateEmailLinks() {
    const user = "emanuela.palazzo.lacanfora";
    const domain = "gmail.com";
    const subject = "MON ART";

    // Génération dynamique de l'adresse e-mail avec une méthode complexe
    const dynamicEmail = generateDynamicEmail(user, domain);

    // Sélectionnez tous les éléments avec la classe 'emailLink'
    const emailLinks = document.querySelectorAll('.emailLink');

    // Appliquez le lien 'mailto' à tous les éléments
    emailLinks.forEach(link => {
        const mailtoLink = `mailto:${dynamicEmail}?subject=${encodeURIComponent(subject)}`;
        link.setAttribute("href", mailtoLink);
    });
}

// Fonction pour générer dynamiquement l'adresse e-mail avec une méthode complexe
function generateDynamicEmail(user, domain) {
    // Mettez en œuvre votre propre logique de génération ici, par exemple, mélangez les caractères, ajoutez des éléments supplémentaires, etc.
    const shuffledUser = shuffleString(user);
    const shuffledDomain = shuffleString(domain);

    return `${shuffledUser}@${shuffledDomain}`;
}

// Fonction pour mélanger les caractères d'une chaîne de manière aléatoire
function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join('');
}

window.onload = generateEmailLinks;
