function generateEmailLinks() {
    const user = "emanuela.palazzo.lacanfora";
    const domain = "gmail.com";
    const subject = "MON ART";

    // Génération dynamique de l'adresse e-mail
    const dynamicEmail = generateDynamicEmail(user, domain);

    const emailLinks = document.querySelectorAll('.emailLink');

    emailLinks.forEach(link => {
        const mailtoLink = `mailto:${encodeURIComponent(dynamicEmail)}?subject=${subject}`;
        link.setAttribute("href", mailtoLink);
        link.addEventListener("click", (event) => handleEmailLinkClick(event, dynamicEmail));
    });
}

function generateDynamicEmail(user, domain) {
    const shuffledUser = shuffleString(user);
    const shuffledDomain = shuffleString(domain);
    return `${shuffledUser}@${shuffledDomain}`;
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function handleEmailLinkClick(event, email) {
    event.preventDefault();
    const confirmation = confirm(`Êtes-vous sûr de vouloir envoyer un e-mail à ${email}?`);
    if (confirmation) {
        window.location.href = event.currentTarget.getAttribute("href");
    }
}

document.addEventListener("DOMContentLoaded", generateEmailLinks);
