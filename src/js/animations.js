import anime from "../lib/anime.es.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, animations.js');
    const genericDivSelector = document.querySelector('.pagetitle');

    anime({
        targets: genericDivSelector,
        translateY: -10,
        easing: 'easeInOutExpo'
    });
});
