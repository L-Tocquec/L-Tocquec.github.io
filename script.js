document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const elements = document.querySelectorAll('[data-en][data-fr]');

  // Ajoute l’emoji dans chaque bouton
  langButtons.forEach(btn => {
    btn.textContent = btn.dataset.emoji;
  });

  function switchLanguage(lang) {
    elements.forEach(el => {
      // Si c’est un lien (<a>), on ne change que le texte
      if (el.tagName.toLowerCase() === "a") {
        el.innerText = el.dataset[lang];
      } 
      // Sinon (titres, paragraphes...), on peut remplacer tout le contenu
      else {
        el.innerHTML = el.dataset[lang];
      }
    });
    localStorage.setItem('lang', lang); // sauvegarde la langue choisie
  }

  // Clique sur un bouton de langue
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // Charge la langue sauvegardée ou FR par défaut
  const savedLang = localStorage.getItem('lang') || 'fr';
  switchLanguage(savedLang);
});
