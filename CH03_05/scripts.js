let printObjProp = function(obj, own=false){
    for (key in obj){
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
  
  
  