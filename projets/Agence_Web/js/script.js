// Appliquer immédiatement le thème avant que la page ne soit visible
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark'; // Vérifier si c'est le mode sombre
    document.body.classList.add(isDarkMode ? 'dark' : '');  // Appliquer immédiatement le mode sombre ou clair

    // Mettre à jour les images et icônes
    updateImagesForMode(isDarkMode);

    // Mettre à jour l'icône du mode
    const modeIcon = document.getElementById('mode-icon');
    if (modeIcon) {
        modeIcon.className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Retirer la classe "transitioning" après tout affichage pour éviter les flashes
    document.body.classList.remove('transitioning');
});

// Fonction pour basculer entre le mode sombre et clair
function boutonDarkMode() {
    // Ajouter la classe 'transitioning' pour cacher les éléments pendant la transition
    document.body.classList.add('transitioning');
    const images = document.querySelectorAll('img');
    images.forEach(image => image.classList.add('transitioning'));

    // Après un léger délai pour cacher les éléments
    setTimeout(() => {
        // Basculer la classe 'dark' sur le body
        const isDarkMode = document.body.classList.toggle('dark');
        
        // Changer l'icône du mode (passer de la lune au soleil et inversement)
        const modeIcon = document.getElementById('mode-icon');
        if (modeIcon) {
            modeIcon.className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }

        // Changer les images en fonction du mode
        updateImagesForMode(isDarkMode);

        // Enregistrer l'état du mode dans localStorage pour qu'il soit persistant
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Supprimer la classe 'transitioning' pour faire réapparaître les éléments
        document.body.classList.remove('transitioning');
        images.forEach(image => image.classList.remove('transitioning'));
    }, 100); // Délai pour permettre de cacher les éléments avant d'effectuer les changements
}

// Fonction pour mettre à jour les images en fonction du mode
function updateImagesForMode(isDarkMode) {
    const logoNavBarre = document.getElementById('logoNavBarre');
    const image2 = document.getElementById('image2');
    const service = document.getElementById('service');
    const image3 = document.getElementById('image3');

    if (logoNavBarre) logoNavBarre.src = isDarkMode ? './img/logo/Fichier_8.png' : './img/logo/Fichier_9.png';
    if (image2) image2.src = isDarkMode ? './img/logo/fichier_2.png' : './img/logo/Fichier_3.png';
    if (service) service.src = isDarkMode ? './img/logo/fichier_2.png' : './img/logo/Fichier_3.png';
    if (image3) image3.src = isDarkMode ? './img/logo/fichier_4.png' : './img/logo/fichier_6.png';
}

// Appliquer le thème sauvegardé au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Appliquer immédiatement la classe 'dark' si le mode sombre est activé dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark'; // Vérifier si c'est le mode sombre
    document.body.classList.add(isDarkMode ? 'dark' : '');  // Appliquer immédiatement la classe dark si nécessaire

    // Ajouter la classe 'transitioning' pour cacher les éléments pendant la transition
    document.body.classList.add('transitioning');

    // Mettre à jour les images en fonction du mode
    updateImagesForMode(isDarkMode);

    // Mettre à jour l'icône du mode (lune ou soleil)
    const modeIcon = document.getElementById('mode-icon');
    if (modeIcon) {
        modeIcon.className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Retirer la classe 'transitioning' après un délai de 100ms pour permettre la transition
    setTimeout(() => {
        document.body.classList.remove('transitioning');
    }, 100);
});

