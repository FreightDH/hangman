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

const checkLose = () => {
  const incorrectCounterElement = document.querySelector('.game__counter span');
  const count = +incorrectCounterElement.textContent;

  if (count === 6) console.log('you lost!');
};

export { checkInputLetter, checkLose, createElement, getRandomNumber };
