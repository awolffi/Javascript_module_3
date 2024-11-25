'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.getElementById("target");
let listItem = "";
for(let i = 0; i < students.length; i++) {
  const item = document.createElement("option");
  item.value = students[i].id;
  item.textContent = students[i].name;
  targetElement.appendChild(item);
}