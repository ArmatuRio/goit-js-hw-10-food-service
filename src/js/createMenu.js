import menu from './menu.json';
import menuTemplate from '../templates/ menu.hbs';

const menuConteiner = document.querySelector('.js-menu');
menuConteiner.insertAdjacentHTML('beforeend', menuMarkup(menu));

function menuMarkup(menu) {
  return menuTemplate(menu);
}