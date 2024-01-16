import '../scss/style.scss';
import generateQuestion from './files/generate-question';
import generateHtml from './files/generate-html';
import initMouseInput from './files/mouse-input';

window.addEventListener('load', () => {
  generateHtml();
  generateQuestion();
  initMouseInput();
});
