const initKeyboardInput = () => {
  const keys = document.querySelectorAll('.keyboard__key');

  document.addEventListener('keydown', (event) => {
    if (window.inputLettersCount === window.answerLength) return;

    const keyName = event.code;
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);
    const underscores = document.getElementsByClassName('letter__text');

    if (!key) return;

    underscores[window.inputLettersCount++].textContent = key.textContent;
    key.classList.add('active');
  });

  document.addEventListener('keyup', (event) => {
    const keyName = event.code;
    const key = Array.from(keys).find((element) => element.dataset.code === keyName);

    if (!key) return;

    key.classList.remove('active');
  });
};

export default initKeyboardInput;
