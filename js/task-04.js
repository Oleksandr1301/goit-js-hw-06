let counterValue = 0;

const displayCounter = document.querySelector("#value");
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

buttonMinus.addEventListener("click", () => {
  counterValue--;
  displayCounter.textContent = counterValue;
});

buttonPlus.addEventListener("click", () => {
  counterValue++;
  displayCounter.textContent = counterValue;
});
