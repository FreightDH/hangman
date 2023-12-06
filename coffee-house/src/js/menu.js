import '../scss/style.scss';
import { initMenu } from './files/burger.js';
import { createCard, isWebp } from './files/functions.js';
import coffeeInfo from './info/coffeeInfo.js';
import initTabs from './files/tabs.js';

window.addEventListener('load', () => {
  isWebp();
  initMenu();
  initTabs();
  initLoadMore();
  generateStartCards();
});

const initLoadMore = () => {
  const loadMoreButton = document.querySelector('.menu__more');

  loadMoreButton.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.card--hidden');

    hiddenCards.forEach((card) => card.classList.remove('card--hidden'));
    loadMoreButton.classList.remove('more--visible');
  });
};

const generateStartCards = () => {
  const menuList = document.querySelector('.cards');
  const loadMoreButton = document.querySelector('.menu__more');

  if (coffeeInfo.length < 5) loadMoreButton.classList.remove('more--visible');
  else loadMoreButton.classList.add('more--visible');

  coffeeInfo.forEach((info, index) => {
    const willHide = index > 3 ? true : false;
    const card = createCard(info, willHide);
    menuList.appendChild(card);
  });
};
