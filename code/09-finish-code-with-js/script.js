const menuBtn = document.querySelector(".menu-btn");
console.log(menuBtn);
const sideDrawer = document.getElementById("side-drawer");

menuBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  sideDrawer.classList.toggle("hide");
  menuBtn.classList.toggle("active");
  //   if (sideDrawer.style.display === "none") {
  //     sideDrawer.style.display = "block";
  //   } else {
  //     sideDrawer.style.display = "none";
  //   }
});
