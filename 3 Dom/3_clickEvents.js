"use strict";

document.querySelector(".title3").textContent = "EVENTS (Click)";

// funtion AddEventListener  (even , function or action)

document.querySelector(".botonBoton").addEventListener("click", function () {
  document.querySelector(".impButton").textContent =
    document.querySelector(".entradaBoton").value;
});
