const initMouseInput = () => {
  const keyboard = document.querySelector('.game__keyboard');
  const answerLength = 6;
  let inputLettersCount = 0;

  keyboard.addEventListener('click', (event) => {
    const key = event.target;
    const underscores = document.querySelectorAll('.letter__text');

    if (inputLettersCount !== answerLength && key.closest('.keyboard__key')) {
      underscores[inputLettersCount++].textContent = key.textContent;
    }
  });
};

export default initMouseInput;
