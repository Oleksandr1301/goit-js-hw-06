function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEL = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", (event) =>
  createEl(Number(inputEL.value))
);

function createEl(amount) {
  let divsEl = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = div.style.height = `${30 + i * 10}px `;
    div.style.backgroundColor = getRandomHexColor();
    divsEl.push(div);
  }
  divBoxesEl.append(...divsEl);
}

buttonDestroyEl.addEventListener("click", destroyEl);

function destroyEl(event) {
  divBoxesEl.innerHTML = "";
  inputEL.value = "";
}
