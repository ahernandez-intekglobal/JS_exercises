'use strict'
// Create a function that will print out the properties of an object. 
//   [a] If one parameter is provided, it should print out all of the properties accessible by that object.
//   [b] If a second boolean value parameter is provided, it should only print out the values that belong to the object instance itself if true. 
// Example:
// 	function CustomObject (a, b) {
// 		this.a = a;
// 		this.b = b;
//	}
//  CustomObject.prototype.c = function () { return this.a + this.b; };
//  var obj = new CustomObject (1, 2);
//  printObjProp (obj); // output: a, b, c
//  printObjProp (obj, false); // output: a, b, c
//  printObjProp (obj, true); // output: a, b

let printObjProp = function(obj, own=false){
  for (let key in obj){
    if (!own || Object.prototype.hasOwnProperty.call(obj, key))
    console.log(key);
  }
}

function CustomObject (a, b) {
  this.a = a;
  this.b = b;
}

CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c
printObjProp (obj, true); // output: a, b