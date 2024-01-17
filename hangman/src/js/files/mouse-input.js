const initMouseInput = () => {
  const keyboard = document.querySelector('.game__keyboard');

  keyboard.addEventListener('click', (event) => {
    if (window.inputLettersCount === window.answerLength) return;
    const key = event.target;
    const underscores = document.getElementsByClassName('letter__text');

    if (key.closest('.keyboard__key')) {
      underscores[window.inputLettersCount++].textContent = key.textContent;
    }
  });
};

export default initMouseInput;
