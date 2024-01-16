const createElement = (tag = 'div', classname = '', content = '') => {
  const element = document.createElement(tag);
  element.className = `${classname}`;
  element.innerHTML = `${content}`;

  return element;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { createElement, getRandomNumber };
