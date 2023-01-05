const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
    // output.textContent = event.target.value;

    // if (event.target.value === '') {
    //     output.textContent = 'Anonymous';
    // }
    output.textContent = event.target.value === '' ? 'Anonymous': event.target.value;
});