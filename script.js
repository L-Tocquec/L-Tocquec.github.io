document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-en][data-fr]');

    function switchLanguage(lang) {
        elements.forEach(el => {
            el.textContent = el.dataset[lang];
        });
        localStorage.setItem('lang', lang); // sauvegarde la langue
    }

    // événements sur les émojis
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id === 'btn-en' ? 'en' : 'fr';
            switchLanguage(lang);
        });
    });

    // charger la langue sauvegardée ou défaut FR
    const savedLang = localStorage.getItem('lang') || 'fr';
    switchLanguage(savedLang);
});
