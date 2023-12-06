import coffeeInfo from '../info/coffeeInfo.js';
import teaInfo from '../info/teaInfo.js';
import dessertInfo from '../info/dessertInfo.js';
import { createCard } from './functions.js';

const initTabs = () => {
  const tabs = document.querySelectorAll('.tabs__item');

  tabs.forEach((item) => {
    item.addEventListener('click', (event) => handleClick(event, item, tabs));
  });
};

const handleClick = (event, currentItem, tabs) => {
  tabs.forEach((item) => item.classList.remove('tab--active'));
  currentItem.classList.add('tab--active');

  const filterQuery = event.currentTarget.dataset.type;

  switch (filterQuery) {
    case 'coffee': {
      generateCards(coffeeInfo);
      break;
    }
    case 'tea': {
      generateCards(teaInfo);
      break;
    }
    case 'dessert': {
      generateCards(dessertInfo);
      break;
    }
    default:
      break;
  }
};

const generateCards = (infoArray) => {
  const menuList = document.querySelector('.cards');
  const loadMoreButton = document.querySelector('.menu__more');
  menuList.innerHTML = '';

  if (infoArray.length < 5) loadMoreButton.classList.remove('more--visible');
  else loadMoreButton.classList.add('more--visible');

  infoArray.forEach((info, index) => {
    const willHide = index > 3 ? true : false;
    const card = createCard(info, willHide);
    menuList.appendChild(card);
  });
};

export default initTabs;
