function generateEmailLinks() {
    const user = "emanuela.palazzo.lacanfora";
    const domain = "gmail.com";
    const subject = "MON ART";

    const dynamicEmail = generateDynamicEmail(user, domain);

    const emailLinks = document.querySelectorAll('.emailLink');

    emailLinks.forEach(link => {
        const mailtoLink = `mailto:${dynamicEmail}?subject=${encodeURIComponent(subject)}`;
        link.setAttribute("href", mailtoLink);

        // Ajoutez un log pour vérifier le lien généré
        console.log("Mailto link:", mailtoLink);
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
