'use strict'
// Given a reasonably sized piece of text, have it displayed on the body of a page in 
// 2, 3, or 4 columns. A user must be able to change the number of columns the text is displayed on.

function updateColumns(){
    let numColumns = document.getElementById("numColumns");
    let textContainer = document.getElementById("textContainer");
    textContainer.style.columnCount = String(numColumns.value);
}