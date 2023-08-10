'use strict'
// Create a function that will recursively go through all of the elements of an array of numbers and add them.
// Example:
//     var arr = [ 1, 3, 5, 7];
//     var sum = addRec (arr); // 16

let addRec = function (array, index=null){
    if (index === 0){
        return array[0];
    }
    if (index === null){
        return addRec(array,array.length-1);
    }
    return array[index] + addRec(array,index-1);
}

var arr = [ 1, 3, 5, 7];
var sum = addRec (arr); // 16
