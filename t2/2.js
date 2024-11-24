'use strict';

const targetElement = document.getElementById("target");

let listItem = document.createElement("li");
listItem.textContent = "First item";
targetElement.appendChild(listItem);

listItem = document.createElement("li");
listItem.textContent = "Secind item";
listItem.classList.add("my-item");
targetElement.appendChild(listItem);

listItem = document.createElement("li");
listItem.textContent = "Third item";
targetElement.appendChild(listItem);
