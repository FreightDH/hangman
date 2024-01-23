import { checkInputLetter, checkLost, checkWin } from './helpers';

const initKeyboardInput = () => {
  const keys = document.getElementsByClassName('keyboard__key');

  document.addEventListener('keydown', (event) => {
    if (window.inputLettersCount === window.answerLength || window.isLost) return;

    const keyName = event.code;
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);
    const underscores = document.getElementsByClassName('letter__text');

    if (!key || key.classList.contains('disabled')) return;

    checkInputLetter(key, underscores);
    checkLost();
    checkWin();
    key.classList.add('active');
  });

  document.addEventListener('keyup', (event) => {
    if (window.isLost) return;

    const keyName = event.code;
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);

    if (!key || key.classList.contains('disabled')) return;

    key.classList.add('disabled');
    key.classList.remove('active');
  });
};

export default initKeyboardInput;
