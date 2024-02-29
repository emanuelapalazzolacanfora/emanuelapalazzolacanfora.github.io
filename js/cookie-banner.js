// Fonction pour définir un cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    
    for (const cookie of ca) {
        let c = cookie.trim(); // Utilisez trim() pour supprimer les espaces au début et à la fin
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
    }

    return null;
}

// Fonction pour cacher la bannière de consentement
function hideCookieBanner() {
    document.getElementById('cookieBanner').style.display = 'none';
}

// Vérification du cookie d'acceptation des cookies au chargement de la page
window.onload = function () {
    const cookiesAccepted = getCookie('cookies_accepted');
    if (!cookiesAccepted) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
};

// Fonction pour cacher la bannière de consentement et définir un cookie d'acceptation
function acceptCookies() {
    hideCookieBanner();
    setCookie('cookies_accepted', 'true', 30); // Le cookie expire dans 30 jours
}

// Fonction pour cacher la bannière de consentement sans définir de cookie
function rejectCookies() {
    hideCookieBanner();
}