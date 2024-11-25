'use strict';
const names = ['John', 'Paul', 'Jones'];
const targetElement = document.getElementById("target");
let listOfStuff = "";

for (let i = 0; i<names.length; i++) {
    listOfStuff += `<li>${names[i]}</li>`;
}

targetElement.innerHTML = listOfStuff;