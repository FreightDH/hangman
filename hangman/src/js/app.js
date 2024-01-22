import '../scss/style.scss';
import generateQuestion from './files/generate-question';
import generateHtml from './files/generate-html';
import initMouseInput from './files/mouse-input';
import initKeyboardInput from './files/keyboard-input';

const startGame = () => {
  window.answerLength = 0;
  window.inputLettersCount = 0;
  window.currentWord = '';
  window.isLost = false;

  generateHtml();
  generateQuestion();
  initMouseInput();
  initKeyboardInput();
};

window.addEventListener('load', startGame);
