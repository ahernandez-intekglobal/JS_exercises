'use strict'
// Create a function that will return the addition of N numbers.
// Example:
//     var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);

function add(...args){
    let res = 0;
    for (let num of args){
        res += num;
    }
    return res;
}
var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);