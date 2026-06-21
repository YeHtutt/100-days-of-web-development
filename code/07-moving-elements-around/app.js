// document.body.children[1].children[0].href = "https://www.google.com/";

// document.body.children[0];
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";
console.log(anchorElement);

anchorElement = document.querySelector("p a");
anchorElement.href = "https://academind.com";
console.log(anchorElement);

// Add An Element
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = 'This leads to Google';
 
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');


// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// Remove Elements
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!
firstH1Element.remove(); //modern browser

//firstH1Element.parentElement.removeChild(firstH1Element); //for older Browser


//Move Elements

firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>';