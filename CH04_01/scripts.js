let fibonacci = function (index){
    if (index === 1 || index === 2)
        return 1;
    return fibonacci(index-1)+fibonacci(index-2);
}
var n = fibonacci (4); // 3
var m = fibonacci (9); // 34