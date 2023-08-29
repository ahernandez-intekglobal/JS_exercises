'use strict'
// Create a function that will populate a containing div with a grid of NxM size. 
// The size must be user defined through a GUI. Every time a new size is selected, 
// any information already on the container should be reset. 


function generateGrid() {
    let rows = parseInt(document.getElementById('rows').value);
    let columns = parseInt(document.getElementById('columns').value);
    let gridContainer = document.getElementById('gridContainer');

    let gridFragment = document.createDocumentFragment();

    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i + 1;
        gridFragment.appendChild(cell);
    }
    gridContainer.innerHTML = "";
    gridContainer.appendChild(gridFragment);
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}