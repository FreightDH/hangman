import { fillPopup, openPopup } from './popup';

const createElement = (tag = 'div', classname = '', content = '') => {
  const element = document.createElement(tag);
  element.className = `${classname}`;
  element.innerHTML = `${content}`;

  return element;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const checkInputLetter = (key, underscores) => {
  const inputLetter = key.textContent;
  const word = window.currentWord.toUpperCase().split('');

  if (word.includes(inputLetter)) {
    word.forEach((letter, index) => {
      if (inputLetter === letter) {
        underscores[index].textContent = inputLetter;
        window.inputLettersCount++;
        console.log('increment');
      }
    });
  } else {
    const incorrectCounterElement = document.querySelector('.game__counter span');
    const count = incorrectCounterElement.textContent;
    const man = document.querySelector('.man__wrapper');

    incorrectCounterElement.textContent = +count + 1;
    man.children[count].classList.add('active');
  }
};

const checkLost = () => {
  const incorrectCounterElement = document.querySelector('.game__counter span');
  const count = +incorrectCounterElement.textContent;

  if (count === 6) {
    const popup = document.querySelector('.popup');
    fillPopup('lose');
    openPopup(popup);
    window.isLost = true;
  }
};

const checkWin = () => {
  const inputWord = Array.from(document.querySelectorAll('.letter__text'))
    .map((item) => item.textContent)
    .join('')
    .toLowerCase();

  if (inputWord === window.currentWord) {
    const popup = document.querySelector('.popup');
    fillPopup('win');
    openPopup(popup);
  }
};

export { createElement, getRandomNumber, checkInputLetter, checkLost, checkWin };
