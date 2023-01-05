const textInputEl = document.querySelector("#validation-input");
textInputEl.addEventListener("blur", (event) => {
  if (event.target.value.length == textInputEl.getAttribute("data-length")) {
    textInputEl.classList.add("valid");
    textInputEl.classList.remove("invalid");
  } else {
    textInputEl.classList.remove("valid");
    textInputEl.classList.add("invalid");
  }
});
