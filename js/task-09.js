function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorSpanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

buttonEl.addEventListener('click', changeColorEl);

function changeColorEl() {
  let randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  colorSpanEl.textContent = randomHexColor;
}