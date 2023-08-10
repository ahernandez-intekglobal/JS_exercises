'use strict'
// Make the function from exercise 5 accept its parameters as either a parameter list or as two arrays containing 2D or 3D point data. 
// Example:
// 	   distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
//     distance ([1,2], [2,2]); // returns 1
// 	   distance ([1,2], [2,2,4]); // error: incompatible point data


let distance = function (...args){
    if(args.length === 4){
        return Math.hypot((args[0]-args[2]),(args[1]-args[3]));
    }
    else if(args.length === 6){
        return Math.hypot((args[0]-args[3]),(args[1]-args[4]),(args[2]-args[5]));
    }
    else if(args.length === 2){
        if(Object.prototype.toString.call(args[0]) === '[object Array]' && Object.prototype.toString.call(args[0]) === '[object Array]'){
            if(args[0].length === 2 && args[1].length === 2){
                return Math.hypot((args[0][0]-args[1][0]),(args[0][1]-args[1][1]));
            }
            else if(args[0].length === 3 && args[1].length === 3){
                return Math.hypot((args[0][0]-args[1][0]),(args[0][1]-args[1][1]),(args[0][2]-args[1][2]));
            }
            else{
                throw new Error("Incompatible point data");
            }
        }
    }
    else{
        throw new Error(`Invalid number of parameters taken ${args.length}, where should be 2,4 or 6`);
    }
}

distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
distance ([1,2], [2,2]); // returns 1
distance ([1,2], [2,2,4]); // error: incompatible point data

