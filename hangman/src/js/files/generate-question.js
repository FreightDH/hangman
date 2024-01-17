import { createElement, getRandomNumber } from './helpers';
import questions from './info/questions';

const generateQuestion = () => {
  const wordWrapper = document.querySelector('.game__word');
  const hint = document.querySelector('.game__hint');
  const incorrectCounter = document.querySelector('.game__counter span');
  const prevWord = window.prevWord || '';
  const { word, question } = getNewWord(prevWord);

  wordWrapper.innerHTML = '';

  for (let i = 0; i < word.length; i++) {
    const letter = createElement(
      'div',
      'word__letter',
      '<div class="letter__text"></div>\n<div class="letter__underscore"></div>',
    );

    wordWrapper.appendChild(letter);
  }

  hint.textContent = `Hint: ${question}`;
  incorrectCounter.textContent = `0 / ${word.length}`;

  window.answerLength = word.length;
  window.inputLettersCount = 0;
};

const getNewWord = (prevWord) => {
  let randIdx = 0;

  do {
    randIdx = getRandomNumber(0, Object.keys(questions).length - 1);
  } while (Object.keys(questions)[randIdx] === prevWord);

  const word = Object.keys(questions)[randIdx];
  const question = questions[word];

  window.prevWord = word;
  return { word, question };
};

export default generateQuestion;
