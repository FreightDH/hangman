let scrollLockStatus = true;

const scrollLockToggle = (delay = 300) => {
  if (document.documentElement.classList.contains('lock')) {
    unlockScroll(delay);
  } else {
    lockScroll(delay);
  }
};

const unlockScroll = (delay = 300) => {
  const body = document.querySelector('body');

  if (scrollLockStatus) {
    const lockPadding = document.querySelectorAll('[data-lp]');

    setTimeout(() => {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove('lock');
    }, delay);

    scrollLockStatus = false;

    setTimeout(() => {
      scrollLockStatus = true;
    }, delay);
  }
};

const lockScroll = (delay = 300) => {
  const body = document.querySelector('body');

  if (scrollLockStatus) {
    const lockPadding = document.querySelectorAll('[data-lp]');

    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
    }

    body.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
    document.documentElement.classList.add('lock');
    scrollLockStatus = false;

    setTimeout(() => {
      scrollLockStatus = true;
    }, delay);
  }
};

export { scrollLockStatus, scrollLockToggle, lockScroll, unlockScroll };
