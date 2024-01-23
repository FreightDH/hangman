import '../scss/style.scss';
import generateQuestion from './files/generate-question';
import generateHtml from './files/generate-html';
import initMouseInput from './files/mouse-input';
import initKeyboardInput from './files/keyboard-input';
import { closePopup } from './files/popup';

const startGame = () => {
  window.answerLength = 0;
  window.inputLettersCount = 0;
  window.currentWord = '';
  window.isLost = false;

  generateHtml();
  generateQuestion();
  initMouseInput();
};

window.addEventListener('load', () => {
  startGame();
  initKeyboardInput();

  document.querySelector('.popup__button').addEventListener('click', (event) => {
    const popup = event.target.closest('.popup');
    closePopup(popup);
    startGame();
  });
});
