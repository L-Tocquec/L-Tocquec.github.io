const langButtons = document.querySelectorAll('.lang-btn');
const elements = document.querySelectorAll('[data-en][data-fr]');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.id === 'btn-en' ? 'en' : 'fr';
        elements.forEach(el => {
            el.textContent = el.dataset[lang];
        });
    });
});
