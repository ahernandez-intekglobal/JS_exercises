'use strict'
// Make the function from exercise 5 accept its parameters as either a parameter list or as two arrays containing 2D or 3D point data. 
// Example:
// 	   distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
//     distance ([1,2], [2,2]); // returns 1
// 	   distance ([1,2], [2,2,4]); // error: incompatible point data


let distance = function (...args){
    if(args.length === 4 || args.length === 6){
        let compDistances = [];
        for (let i=0;i<args.length/2;i++){
            compDistances[i] = args[i]-args[args.length/2 + i];
        }
        return Math.hypot(...compDistances);
    }
    else if(args.length === 2){
        if(args.every(arg => Array.isArray(arg)) && 
           ( args.every(arg => arg.length===2) || args.every(arg => argarg.length===3) ) ){
            let compDistances = [];
            for (let i=0;i<args[0].length;i++){
                compDistances[i] = args[0][i]-args[1][i];
            }
            return Math.hypot(...compDistances);
        }
        else{
            throw new Error("Incompatible point data");
        }
    }
    else{
        throw new Error(`Invalid number of parameters taken ${args.length}, where should be 2,4 or 6`);
    }
}

distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
distance ([1,2], [2,2]); // returns 1
distance ([1,2], [2,2,4]); // error: incompatible point data

