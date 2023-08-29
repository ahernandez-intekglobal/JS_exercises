'use strict'
// Create an object that will hold methods for adding, multiplying, and factorial operations.
// Example:
//     var a = myMath.add (1, 2, 3); //6
//     var b = myMath.mul (1, 2, 3); // 6
//     var c = myMath.fact (	3); // 6

let myMath = {
    add : function (...args){
        if (args.length === 0)
            return
        let res = 0;
        for(let num of args){
            res += num;
        }
        return res;
    },
    mul: function (...args){
        if (args.length === 0)
            return
        let res=1;
        for(let num of args){
            res *= num;
        }
        return res;
    },
    fact: function (num){
        if (!num)
            return
        let res = 1;
        while(num > 1){
            res *= num;
            num--;
        }
        return res;
    } 
}

var a = myMath.add (1, 2, 3);
var b = myMath.mul (1, 2, 3);
var c = myMath.fact (3);