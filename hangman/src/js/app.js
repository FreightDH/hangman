import '../scss/style.scss';
import generateHtml from './files/generate-html';
import initMouseInput from './files/mouse-input';

window.addEventListener('load', () => {
  generateHtml();
  initMouseInput();
});
