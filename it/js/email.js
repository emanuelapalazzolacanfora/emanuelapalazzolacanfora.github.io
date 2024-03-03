function generateEmailLinks() {
    const user = "emanuelapl";
    const domain = "proton.me";
    const subject = "LA MIA ARTE";

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
