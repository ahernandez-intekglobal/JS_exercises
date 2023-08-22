'use strict'
// Create a function that receives a parameter containing a string. The string data must be transformed 
// into an object that can hold properties and methods. Note: Some changes may be required in the string data
// 	Example:
// 	var str = “{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}”
// 
//  var obj = dataParse(str);

function dataParse(strObj){
    return eval(`(()=>{return ${strObj}})()`);
}
var str = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
var obj = dataParse(str);
obj.myFn(1,2);
