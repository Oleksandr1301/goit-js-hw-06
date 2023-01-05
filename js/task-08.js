const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be completed!");
  }

  console.log({ Email: email.value, Password: password.value });

  event.currentTarget.reset();
}
