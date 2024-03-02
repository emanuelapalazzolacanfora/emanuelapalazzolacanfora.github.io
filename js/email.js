<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Votre Formulaire</title>
</head>
<body>

<script>
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
        link.addEventListener("click", (event) => handleEmailLinkClick(event, dynamicEmail));
    });
}

function generateDynamicEmail(user, domain) {
    return `${user}@${domain}`;
}

function handleEmailLinkClick(event, email) {
    event.preventDefault();

    // Créez un élément de checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'confirmationCheckbox';
    checkbox.style.marginRight = '5px';  // Ajoutez une marge pour l'esthétique

    // Créez une étiquette pour la checkbox
    const label = document.createElement('label');
    label.htmlFor = 'confirmationCheckbox';
    label.appendChild(document.createTextNode('Je confirme que je ne suis pas un robot'));

    // Créez un conteneur pour la checkbox et l'étiquette
    const checkboxContainer = document.createElement('div');
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);

    // Ajout de la checkbox à la boîte de dialogue de confirmation
    const confirmation = confirm(`
        Êtes-vous sûr de vouloir envoyer un e-mail à ${email}?
        Cette action peut aider à prévenir le spam.
    `);

    // Si l'utilisateur confirme, ouvre le client de messagerie
    if (confirmation) {
        checkboxContainer.style.textAlign = 'center';  // Alignez la checkbox au centre
        checkbox.checked = false;  // Assurez-vous qu'elle n'est pas cochée par défaut
        checkbox.style.marginTop = '10px';  // Ajoutez une marge pour l'esthétique

        // Ajoutez la checkbox à la boîte de dialogue
        const checkboxResult = confirm(checkboxContainer);

        // Si la checkbox est cochée, ouvre le client de messagerie
        if (checkboxResult && checkbox.checked) {
            window.location.href = event.currentTarget.getAttribute('href');
        }
    }
}

document.addEventListener("DOMContentLoaded", generateEmailLinks);
</script>

</body>
</html>
