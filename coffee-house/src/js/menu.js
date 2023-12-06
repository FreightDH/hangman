import '../scss/style.scss';
import { initMenu } from './files/burger.js';
import { createCard, isWebp } from './files/functions.js';
import coffeeInfo from './info/coffeeInfo.js';
import initTabs from './files/tabs.js';

window.addEventListener('load', () => {
  isWebp();
  initMenu();
  initTabs();
  generateStartCards();
});

const generateStartCards = () => {
  const menuList = document.querySelector('.cards');

  coffeeInfo.forEach((info) => {
    const card = createCard(info);
    menuList.appendChild(card);
  });
};
