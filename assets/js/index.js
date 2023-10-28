// async function getData() {
//   try {
//     const response = await fetch("/index.json");
//     if (!response.ok) {
//       return;
//     }
//     let data = await response.json();
//     console.log(data)
//     return data
//   } catch(e) {
//     return;
//   }
// }

// getData()


import axios from "axios";
import lunr from "lunr";

console.log("js")
console.log("mangobar")

const menu = document.getElementById("menu");
const cross = document.getElementById("cross");

menu.addEventListener("click", () => {
  toggleClass()
})

cross.addEventListener("click", () => {
  toggleClass()
})




function toggleClass() {
  var navMenu = document.getElementById("nav-menu");
  console.log("hello")
  navMenu.classList.toggle("nav-menu-display");
}
