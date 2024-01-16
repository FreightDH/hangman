import '../scss/style.scss';
import generateQuestion from './files/generate-question.js';
import generateHtml from './files/generate-html.js';
import initMouseInput from './files/mouse-input.js';

window.addEventListener('load', () => {
  generateHtml();
  generateQuestion();
  initMouseInput();
});
