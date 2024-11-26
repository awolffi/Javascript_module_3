'use strict';

const trigger = document.getElementById("trigger");
const img = document.querySelector("img");

trigger.addEventListener("mouseover", event => {
    img.src = "img/picB.jpg";
});

trigger.addEventListener("mouseout", event => {
    img.src = "img/picA.jpg";
});