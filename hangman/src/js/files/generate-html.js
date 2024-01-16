import { dataCodes, labels } from './info/keys-labels';

const generateHtml = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('game__keyboard');

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

  document.querySelectorAll('.game__column')[1].appendChild(keyboard);
};

export default generateHtml;
