import { checkInputLetter, checkLose } from './helpers';

const initMouseInput = () => {
  const keyboard = document.querySelector('.game__keyboard');

  keyboard.addEventListener('click', (event) => {
    if (window.inputLettersCount === window.answerLength) return;
    const key = event.target;
    const underscores = document.getElementsByClassName('letter__text');

    if (key.closest('.keyboard__key') && !key.classList.contains('disabled')) {
      checkInputLetter(key, underscores);
      checkLose();
      key.classList.add('disabled');
    }
  });
};

export default initMouseInput;
