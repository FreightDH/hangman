import { checkInputLetter, checkLose } from './helpers';

const initKeyboardInput = () => {
  const keys = document.querySelectorAll('.keyboard__key');

  document.addEventListener('keydown', (event) => {
    if (window.inputLettersCount === window.answerLength) return;

    const keyName = event.code;
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);
    const underscores = document.getElementsByClassName('letter__text');

    if (!key || key.classList.contains('disabled')) return;

    checkInputLetter(key, underscores);
    checkLose();
    key.classList.add('active');
  });

  document.addEventListener('keyup', (event) => {
    const keyName = event.code;
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);

    if (!key || key.classList.contains('disabled')) return;

    key.classList.add('disabled');
    key.classList.remove('active');
  });
};

export default initKeyboardInput;
