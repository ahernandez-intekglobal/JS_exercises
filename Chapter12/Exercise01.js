'use strict'
// Given the following HTML markup, create a JS function that can print out the attributes of the DOM elements:
// 	<div id=’a’ class=’square’ style=’display:inline-block’ val=’something important’></div>
//     Example:
//     printAttr (el, [‘id’, ‘class’, ‘style’, ‘val’]);
//     // should print out:
//     // a
//     // square
//     // display:inline-block
//     // something important

function printAttr(element,attrs){
    for (let attr in attrs){
        console.log(element.attributes[attr].value);
    }
}

let el = document.getElementById('a');

printAttr (el, ['id', 'class', 'style', 'val']);
