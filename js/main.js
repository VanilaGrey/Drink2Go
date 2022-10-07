import './splide-init.js';
import './leaflet-init.js';

(() => {
  const navMain = document.querySelector('.main-nav');

  navMain.classList.remove('main-nav--no-js');

  navMain.querySelector('.main-nav__toggle').addEventListener('click', () => {
    navMain.classList.toggle('main-nav--opened');
  });

})();
