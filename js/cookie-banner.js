// Fonction pour cacher la bannière de consentement et définir un cookie d'acceptation
function acceptCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
    setCookie('cookies_accepted', 'true', 30); // Le cookie expire dans 365 jours
}

// Fonction pour cacher la bannière de consentement sans définir de cookie
function rejectCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}