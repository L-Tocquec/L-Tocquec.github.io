document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const elements = document.querySelectorAll('[data-en][data-fr]');

  // Ajoute l’emoji dans chaque bouton
  langButtons.forEach(btn => {
    btn.textContent = btn.dataset.emoji;
  });

  function switchLanguage(lang) {
    elements.forEach(el => {
      el.innerHTML = el.dataset[lang]; // <-- garde le HTML
    });
    localStorage.setItem('lang', lang); // sauvegarde la langue choisie
  }

  // Ajoute l’événement sur les boutons
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // Charge la langue sauvegardée ou défaut FR
  const savedLang = localStorage.getItem('lang') || 'fr';
  switchLanguage(savedLang);
});

