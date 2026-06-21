let inputElement = document.querySelector('.control input');
let remainingChars = document.getElementById('remaining-chars');
const maxChars = inputElement.maxLength;

function calculateRemainingChars(event) {
    // let remaining = maxChars - inputElement.value.length;
    // console.log(remaining);
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remaining = maxChars - enteredTextLength;

    remainingChars.textContent = remaining;
    if(remaining <= 10) {
        inputElement.classList.add('warning');
    }else {
         inputElement.classList.remove('warning');
    }
}

inputElement.addEventListener('input', calculateRemainingChars);