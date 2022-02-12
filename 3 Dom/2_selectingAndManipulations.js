"use strict";

document.querySelector(".title2").textContent = "MANIPULATION AND SELECTION";

// write in a class
document.querySelector(".message").textContent = "Hola Mundo";

// Write in a id
document.querySelector("#messageId").textContent = "Hola Id";

// input
let entrada = (document.querySelector(".entrada").value = 12);
console.log(entrada);
