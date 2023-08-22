'use strict'
// Create a 5 x 5 grid (use tables or divs.) Each element of the grid will be sequentially 
// numbered and each element must respond to a click event by alerting its corresponding number.

let grid = document.getElementById('grid-container');

for(let i = 0; i<25; i++){
    let gridItem = document.createElement('div');
    gridItem.innerHTML = `<div class="grid-item" id="${i+1}">${i+1}</div>`;
    grid.appendChild(gridItem);
    grid.addEventListener('click', alertNumber);
}


function alertNumber(event){
    alert(`You have clicked on ${event.target.textContent}`);
}