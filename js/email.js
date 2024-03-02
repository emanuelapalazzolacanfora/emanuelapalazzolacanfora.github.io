document.addEventListener('DOMContentLoaded', function() {
    // Ajoute un gestionnaire d'événements au clic sur le bouton
    document.querySelector('.generateEmailButton').addEventListener('click', function() {
        generateEmailLinks();
    });

    // Ajoute un gestionnaire d'événements au clic sur le lien email
    document.querySelectorAll('.emailLink').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const email = link.getAttribute('data-email');
            const subject = "MON ART";
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

            // Ouvre la fenêtre de messagerie uniquement si l'utilisateur a cliqué sur le lien
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                // Internet Explorer
                window.navigator.msSaveOrOpenBlob(new Blob(['<!DOCTYPE html><html><head><title></title></head><body><a href="' + mailtoLink + '"></a></body></html>']), 'mailto.html');
            } else {
                // Autres navigateurs
                window.open(mailtoLink, '_blank');;
            }
        });
    });

    // Fonction pour générer dynamiquement l'adresse e-mail avec une méthode complexe
    function generateDynamicEmail(user, domain) {
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

    // Fonction pour générer le lien e-mail
    function generateEmailLinks() {
        const user = "emanuela.palazzo.lacanfora";
        const domain = "gmail.com";
        const subject = "MON ART";

        const dynamicEmail = generateDynamicEmail(user, domain);

        // Cible tous les liens e-mail dans la balise nav avec la classe .emailLink
        const emailLinks = document.querySelectorAll('.emailLink');

        emailLinks.forEach(link => {
            const mailtoLink = `mailto:${dynamicEmail}?subject=${encodeURIComponent(subject)}`;
            link.setAttribute("href", mailtoLink);

            // Ajoute un log pour vérifier le lien généré
            console.log("Mailto link:", mailtoLink);
        });
    }
});
