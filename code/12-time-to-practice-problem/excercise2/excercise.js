// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

// console.dir(document.body);

let firstBtn = document.body.children[2].children[4];
// console.dir(firstBtn);
// console.log(firstBtn);

let secondBtn = document.getElementById("blue-bg");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// function firstBtnOutput() {
//     console.dir(firstBtn);
// }

// function secondBtnOutput(event) {
//     console.dir(event.target);
// }
// firstBtn.addEventListener('click', firstBtnOutput);
// secondBtn.addEventListener('click', secondBtnOutput);


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// console.dir(document.body);
let firstParagraph = document.body.children[2].children[1];
let thirdParagraph = document.body.children[2].children[3];
// console.dir(firstParagraph);
// console.dir(thirdParagraph);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
function removeThirdParagraph() {
    thirdParagraph.remove();
}

function changeBgColor(event) {
    console.dir(event.target);
    // firstParagraph.style.backgroundColor = 'blue';
    // firstParagraph.className = 'blue-bg';
    firstParagraph.classList.add('blue-bg');
}

firstBtn.addEventListener('click', removeThirdParagraph);
secondBtn.addEventListener('click', changeBgColor);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
