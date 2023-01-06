function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEL = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

const inputChange = (e) => {
  inputEL.setAttribute("count", Number(e.currentTarget.value));
};
inputEL.addEventListener("input", inputChange);

let baseBoxSize = 30;

const createEl = () => {
  let divsEl = Number(inputEL.getAttribute("count"));;
  for (let i = 0; i < divsEl; i += 1) {
    const div = document.createElement("div");
    div.style.width = div.style.height = `${baseBoxSize}px `;
    div.style.backgroundColor = getRandomHexColor();
    baseBoxSize += 10;
    divBoxesEl.append(div);
  }
};

buttonCreateEl.addEventListener("click", createEl);

buttonDestroyEl.addEventListener("click", destroyEl);

function destroyEl() {
  divBoxesEl.innerHTML = "";
  inputEL.value = "";
  baseBoxSize = 30;
}
