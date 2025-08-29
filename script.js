document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const elements = document.querySelectorAll('[data-en][data-fr]');

  // Met l’emoji dans chaque bouton
  langButtons.forEach(btn => {
    btn.textContent = btn.dataset.emoji;
  });

  function switchLanguage(lang) {
    elements.forEach(el => {
      el.textContent = el.dataset[lang];
    });
    localStorage.setItem('lang', lang); // sauvegarde la langue
  }

  // Événements sur les boutons emojis
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // Charger la langue sauvegardée ou défaut FR
  const savedLang = localStorage.getItem('lang') || 'fr';
  switchLanguage(savedLang);
});

