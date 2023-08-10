'use strict'
// Write a function that will calculate the distance between two points. The function should be able to handle 2D and 3D points. 
// Example:
//     var x1 = 1, y1 = 2, z1 = 1;
// 	   var x2 = 2, y2 = 2, z2 = 4;
// 	   var delta1 = distance (x1, y1, x2, y2); // delta = 1
// 	   var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622…
//     distance (x1, x2); // should throw an error: Insufficient parameters

let distance = function (...args){
    if(args.length === 4){
        return Math.hypot((args[0]-args[2]),(args[1]-args[3]));
    }
    else if(args.length === 6){
        return Math.hypot((args[0]-args[3]),(args[1]-args[4]),(args[2]-args[5]));
    }
    else{
        throw new Error(`Invalid number of parameters taken ${args.length}, where should be 4 or 6`)
    }
}

var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2); // delta = 1
var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622…
distance (x1, x2); // should throw an error: Insufficient parameters
