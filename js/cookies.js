          // Vérification du cookie d'acceptation des cookies au chargement de la page
window.onload = function () {
    const cookiesAccepted = getCookie('cookies_accepted');
    console.log("Cookies acceptés :", cookiesAccepted);

    if (!cookiesAccepted || cookiesAccepted !== 'true') {
        console.log("Afficher la bannière");
        document.getElementById('cookieBanner').style.display = 'block';
    } else {
        console.log("Pas besoin d'afficher la bannière, les cookies sont acceptés.");
        document.getElementById('cookieBanner').style.display = 'none';
    }
};

// Accepter les cookies pour le chemin /fr/
function acceptCookiesFR() {
    acceptCookies('/fr/');
}

// Accepter les cookies pour le chemin /en/
function acceptCookiesEN() {
    acceptCookies('/en/');
}

// Accepter les cookies pour le chemin /it/
function acceptCookiesIT() {
    acceptCookies('/it/');
}

// Fonction pour cacher la bannière de consentement et définir un cookie d'acceptation
function acceptCookies(lang) {
    hideCookieBanner();

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 jours d'expiration

    setCustomCookie('cookies_accepted', 'true', 30, lang);
    console.log("Cookies acceptés :", getCookie('cookies_accepted'));
    console.log("Date d'expiration du cookie :", expirationDate.toUTCString());
}

// Fonction pour définir un cookie avec des options personnalisées
function setCustomCookie(name, value, days, path) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=" + path + "; secure";
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');

    for (const cookie of ca) {
        let c = cookie.trim();
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
    }

    return null;
}

// Fonction pour cacher la bannière de consentement
function hideCookieBanner() {
    document.getElementById('cookieBanner').style.display = 'none';
}

// Fonction pour cacher la bannière de consentement sans définir de cookie
function rejectCookies() {
    hideCookieBanner();
}
