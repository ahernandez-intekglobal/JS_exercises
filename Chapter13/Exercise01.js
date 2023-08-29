'use strict'
// Create a 5 x 5 grid (use tables or divs.) Each element of the grid will be sequentially 
// numbered and each element must respond to a click event by alerting its corresponding number.

let grid = document.getElementById('grid-container');
let gridFragment = document.createDocumentFragment();

for(let i = 0; i<25; i++){
    let gridItem = document.createElement('div');
    gridItem.className = "grid-item";
    gridItem.id = i+1;
    gridItem.textContent = i+1;
    gridFragment.appendChild(gridItem);
}
grid.appendChild(gridFragment);
grid.addEventListener('click', alertNumber);


function alertNumber(event){
    if(event.target.className === "grid-item")
        alert(`You have clicked on ${event.target.textContent}`);
}