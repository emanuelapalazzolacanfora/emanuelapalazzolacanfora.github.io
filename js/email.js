        document.addEventListener('DOMContentLoaded', function() {
            // Appelle la fonction lorsque le DOM est chargé
            generateEmailLinks();
        });

        // Place ici tes autres fonctions JavaScript, si nécessaire

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

            // Cible le lien e-mail dans la balise nav
            const emailLink = document.querySelector('.emailLink');

            const mailtoLink = `mailto:${dynamicEmail}?subject=${encodeURIComponent(subject)}`;
            emailLink.setAttribute("href", mailtoLink);

            // Ajoute un log pour vérifier le lien généré
            console.log("Mailto link:", mailtoLink);
        }
