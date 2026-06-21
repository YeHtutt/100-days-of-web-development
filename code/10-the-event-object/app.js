let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked';
    console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);


let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let userInputValue = inputElement.value;
    // console.log(userInputValue);
    // console.log(event);

    let userInputValue = event.target.value;
    console.log(userInputValue);
}

inputElement.addEventListener('input', retrieveUserInput);