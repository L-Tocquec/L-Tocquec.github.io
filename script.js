document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const elements = document.querySelectorAll('[data-en][data-fr]');

  // Met l’emoji sur les boutons
  langButtons.forEach(btn => {
    btn.textContent = btn.dataset.emoji;
  });

  function switchLanguage(lang) {
    elements.forEach(el => {
      // Si c'est un lien, changer seulement le texte
      if (el.tagName.toLowerCase() === "a") {
        el.innerText = el.dataset[lang];
      } else {
        // Sinon changer le texte/HTML
        el.innerHTML = el.dataset[lang];
      }
    });

    localStorage.setItem('lang', lang); // sauvegarde la langue
  }

  // Événements sur les boutons de langue
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // Charger la langue sauvegardée ou par défaut 'fr'
  const savedLang = localStorage.getItem('lang') || 'fr';
  switchLanguage(savedLang);
});
