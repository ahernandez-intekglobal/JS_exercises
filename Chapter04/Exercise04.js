'use strict'
// Write a function that will accept any number of arguments and print out their data type.
// Example:
// 	   dataType (1, 6.2831, “pi*2”, [function(){}, 1], {}, function () {}); 
// 	   // number, float, string, array, object, function


let dataType = function(...args) {
    for(let object of args){
        if (Object.prototype.toString.call(object) === '[object Number]'){
            if(Number.isInteger(object)){
                console.log('number');
            }
            else if(Number.isNaN(object)){
                console.log('NaN');
            }
            else{
                console.log('float');
            }
        }
        else
            console.log(Object.prototype.toString.call(object).slice(7,-1).toLowerCase());
    }
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 