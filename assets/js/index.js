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
const navMenu = document.getElementById("nav-menu");

// menu.addEventListener("click", () => {
    // toggleClass()
// })

// cross.addEventListener("click", () => {
    // toggleClass()
// })

const menuBtn = document.querySelector("#menu-icon");
const navArea = document.querySelector("#nav-area");

menuBtn.addEventListener("click", () => {

  toggleClass(navArea, "nav-area-expand")

})




function toggleClass(element, className) {
    element.classList.toggle(className);
}



function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = 'Copied!';

                setTimeout(function () {
                    button.innerText = 'Copy';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        // if (pre.parentNode.classList.contains('highlight')) {
        // var highlight = pre.parentNode;
        // highlight.parentNode.insertBefore(button, highlight);
        // } else {
        pre.parentNode.insertBefore(button, pre);
        // }
    });
}


if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function () {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}


// dark mode
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
// const darkmode = new Darkmode()
// darkmode.toggle()

// const moon = document.getElementById("moon")
// const sun = document.getElementById("sun")
// const navw = document.getElementById("nav-icon-white")
// const navb = document.getElementById("nav-icon-black")

// function mode() {
//     if (darkmode.isActivated()) {
//         moon.classList.toggle("mode")
//         navb.classList.toggle("mode")
//         navw.classList.toggle("mode")
//       console.log("white")
//     } else {
//         sun.classList.toggle("mode")
//         // navb.classList.toggle("mode")
//         navw.classList.toggle("mode")
//       console.log("black")
//     }
// }

// mode()

// moon.addEventListener("click", () => {
//     darkmode.toggle()
//   mode()


// })

// sun.addEventListener("click", () => {
//     darkmode.toggle()
//   mode()
// })


// console.log(darkmode.isActivated()) // will return true

