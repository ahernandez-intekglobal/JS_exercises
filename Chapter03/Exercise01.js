'use strict'
// Create a function that will multiply two numbers. The function must return the result in base 13.
// Example:
//     var answer = mul (9, 6); // 42

let mul = function (a,b){
    let decRes = a * b;
    return Number(decRes.toString(13));
}
var answer = mul(6,9);