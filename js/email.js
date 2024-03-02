function generateEmailLinks() {
    const user = "emanuela.palazzo.lacanfora";
    const domain = "gmail.com";
    const subject = "MON ART";

    // Génération dynamique de l'adresse e-mail
    const dynamicEmail = generateDynamicEmail(user, domain);

    const emailLinks = document.querySelectorAll('.emailLink');

    emailLinks.forEach(link => {
        // Obscurcit l'adresse e-mail pour le lien
        const obscuredEmail = obscureEmail(dynamicEmail);

        // Stocke la vraie adresse dans un attribut personnalisé
        link.setAttribute("data-real-email", dynamicEmail);

        // Crée le lien `mailto` avec l'adresse obscurcie
        const mailtoLink = `mailto:${obscuredEmail}?subject=${subject}`;
        link.setAttribute("href", mailtoLink);

        // Ajoute l'événement de clic
        link.addEventListener("click", handleEmailLinkClick);
    });
}

function generateDynamicEmail(user, domain) {
    return `${user}@${domain}`;
}

function obscureEmail(email) {
    // Ajoutez votre propre logique d'obscurcissement ici
    // Par exemple, mélangez les caractères, utilisez des caractères spéciaux, etc.
    return email.replace(/./g, '*');
}

function handleEmailLinkClick(event) {
    event.preventDefault();

    // Récupère la vraie adresse à partir de l'attribut personnalisé
    const realEmail = event.currentTarget.getAttribute("data-real-email");

    // Affiche une boîte de dialogue de confirmation avec la vraie adresse
    const confirmation = confirm(`Êtes-vous sûr de vouloir envoyer un e-mail à ${realEmail}?`);
    
    // Si l'utilisateur confirme, ouvre le client de messagerie avec l'adresse réelle
    if (confirmation) {
        window.location.href = event.currentTarget.getAttribute("href");
    }
}

document.addEventListener("DOMContentLoaded", generateEmailLinks);
