function generateEmailLinks() {
    const user = "emanuela.palazzo.lacanfora";
    const domain = "gmail.com";
    const subject = "MON ART";

    // Génération dynamique de l'adresse e-mail
    const dynamicEmail = generateDynamicEmail(user, domain);

    const emailLinks = document.querySelectorAll('.emailLink');

    emailLinks.forEach(link => {
        const mailtoLink = `mailto:${dynamicEmail}?subject=${subject}`;
        link.setAttribute("href", mailtoLink);
        link.classList.add('protected-email');
    });
}

function generateDynamicEmail(user, domain) {
    return `${user}@${domain}`;
}

document.addEventListener("DOMContentLoaded", generateEmailLinks);
