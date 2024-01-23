import { lockScroll, scrollLockStatus, unlockScroll } from './scroll-lock';

const openPopup = (popup) => {
  if (popup && scrollLockStatus) {
    lockScroll();
    popup.classList.add('popup-open');

    popup.addEventListener('click', (event) => {
      if (!event.target.closest('.popup__content')) {
        closePopup(event.target.closest('.popup'));
      }
    });
  }
};

const closePopup = (popup) => {
  if (scrollLockStatus) {
    unlockScroll();
    popup.classList.remove('popup-open');
  }
};

const fillPopup = (mode = 'win') => {
  const popupImage = document.querySelector('.popup__icon');
  const popupMessage = document.querySelector('.popup__message');
  const popupAnswer = document.querySelector('.popup__answer span');

  switch (mode) {
    case 'win': {
      popupImage.innerHTML = `<img src="img/win.svg" alt="win-icon" />`;
      popupMessage.textContent = 'Congratulations! You won!';
      break;
    }
    case 'lose': {
      popupImage.innerHTML = `<img src="img/lose.svg" alt="lose-icon" />`;
      popupMessage.textContent = 'Oh no, you lost!';
      break;
    }
    default:
      break;
  }

  popupAnswer.textContent = window.currentWord;
};

export { openPopup, closePopup, fillPopup };
