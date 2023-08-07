let dataType = function(...args) {
    for(let object of args){
        console.log(Object.prototype.toString.call(object));
    }
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 