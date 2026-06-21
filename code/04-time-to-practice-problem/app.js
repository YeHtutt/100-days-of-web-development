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