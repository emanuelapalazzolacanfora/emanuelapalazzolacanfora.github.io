document.addEventListener("DOMContentLoaded", generateEmailLinks);

async function generateEmailLinks() {
    const user = "emanuela.palazzo.lacanfora";
    const domain = "gmail.com";
    const subject = "MON ART";

    const dynamicEmail = generateDynamicEmail(user, domain);
    const hashedEmail = await hashEmail(dynamicEmail);

    const emailLinks = document.querySelectorAll('.emailLink');

    emailLinks.forEach(link => {
        const mailtoLink = `mailto:${encodeURIComponent(hashedEmail)}?subject=${encodeURIComponent(subject)}`;
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

async function hashEmail(email) {
    const encoder = new TextEncoder();
    const data = encoder.encode(email);

    // Utilisation de l'algorithme de hachage SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Conversion du buffer de hachage en une chaîne hexadécimale
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

function handleEmailLinkClick(event, email) {
    event.preventDefault();
    const confirmation = confirm(`Êtes-vous sûr de vouloir envoyer un e-mail à ${email}?`);
    if (confirmation) {
        window.location.href = event.currentTarget.getAttribute("href");
    }
}
