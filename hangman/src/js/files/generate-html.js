import { createElement } from './helpers';
import { dataCodes, labels } from './info/keys-labels';

const generateHtml = () => {
  const keyboard = generateKeyboard();
  const prevKeyboard = document.querySelector('.keyboard');
  const manIcon = generateManIcon();
  const prevManIcon = document.querySelector('.man__wrapper');

  if (prevKeyboard) prevKeyboard.remove();
  if (prevManIcon) prevManIcon.remove();

  document.querySelectorAll('.game__column')[1].appendChild(keyboard);
  document.querySelector('.gallows__man').appendChild(manIcon);
};

const generateKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.className = 'game__keyboard keyboard';

  const keys = [];

  for (let i = 0; i < 26; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    key.setAttribute('data-code', dataCodes[i]);
    key.textContent = labels[i];
    keys.push(key);
  }

  for (let i = 0; i < 3; i += 1) {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');

    switch (i) {
      case 0: {
        for (let j = 0; j < 9; j += 1) {
          row.append(keys[j]);
        }
        break;
      }
      case 1: {
        for (let j = 9; j < 18; j += 1) {
          row.append(keys[j]);
        }
        break;
      }
      case 2: {
        for (let j = 18; j < 26; j += 1) {
          row.append(keys[j]);
        }
        break;
      }
      default:
        break;
    }

    keyboard.append(row);
  }

  return keyboard;
};

const generateManIcon = () => {
  const order = ['head', 'body', 'hand', 'hand hand--right', 'leg', 'leg leg--right'];
  const manWrapper = createElement('div', 'man__wrapper');

  order.map((item) => {
    const element = createElement(
      'div',
      `man__${item}`,
      `<img src="img/man/${item.split(' ')[1] || item.split(' ')[0]}.svg" alt="${item.split(' ')[0]}-icon" />`,
    );
    manWrapper.appendChild(element);
    return element;
  });

  return manWrapper;
};

export default generateHtml;
