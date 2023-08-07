let addRec = function (array, index=null){
    if (index === 0){
        return array[0];
    }
    if (index === null){
        return addRec(array,array.length-1);
    }
    return array[index] + addRec(array,index-1);
}

var arr = [ 1, 3, 5, 7];
var sum = addRec (arr); // 16
