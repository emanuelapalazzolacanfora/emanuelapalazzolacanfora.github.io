 // Détecter la langue préférée du navigateur
 var userLang = navigator.language || navigator.userLanguage;

 // Liste des langues proposées sur votre site
 var supportedLanguages = ['fr', 'en', 'it']; // Ajoutez d'autres langues au besoin

 // Vérifier si la langue détectée est supportée
 if (supportedLanguages.includes(userLang)) {
   // Rediriger automatiquement vers la page dans la langue détectée
   window.location.href = '/' + userLang + '/index-' + userLang + '.html';

   // Afficher un message dans un élément de votre site
   displayMessage(getAlertMessage(userLang));
 } else {
   // Si la langue n'est pas proposée, rediriger vers une langue par défaut (par exemple, le français)
   window.location.href = '/fr/index_fr.html'; // Vous pouvez également choisir 'index_en.html' pour l'anglais

   // Afficher un message dans un élément de votre site
   displayMessage(getAlertMessage('fr'));
 }

 // Fonction pour obtenir le message d'alerte en fonction de la langue
 function getAlertMessage(language) {
   switch (language) {
     case 'fr':
       return 'Bienvenue sur notre site en français !';
     case 'en':
       return 'Welcome to our website in English!';
     case 'it':
       return 'Benvenuti sul nostro sito in italiano!';
     default:
       return 'Welcome!';
   }
 }

 // Fonction pour afficher le message dans un élément de votre site
 function displayMessage(message) {
   var messageContainer = document.getElementById('message-container'); // Remplacez 'message-container' par l'ID de votre élément
   if (messageContainer) {
     messageContainer.innerText = message;
   }
 }

 // Fonction pour gérer le changement de langue depuis le sélecteur
 function changeLanguage(selectedLang) {
   // Rediriger vers la page dans la langue sélectionnée
   window.location.href =  '/' + selectedLang + '/index-' + selectedLang + '.html';
 }
