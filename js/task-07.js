const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", () => {
  textEl.style.fontSize = `${inputEl.value}px`;
});
