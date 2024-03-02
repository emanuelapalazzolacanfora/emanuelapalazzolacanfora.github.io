document.addEventListener('DOMContentLoaded', function() {
        // Appelle la fonction lorsque le DOM est chargé
        generateEmailLinks();
        
        // Ajoute un gestionnaire d'événements au clic sur le bouton
        document.querySelector('.generateEmailButton').addEventListener('click', function() {
            generateEmailLinks();
        });

        // Ajoute un gestionnaire d'événements au clic sur le lien email
        document.querySelectorAll('.emailLink').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Empêche le lien de naviguer vers une autre page
                // Extrait l'adresse email du lien et ouvre le client de messagerie
                const email = link.getAttribute('data-email');
                const subject = "MON ART";
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
                window.location.href = mailtoLink;
            });
        });
    });

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
