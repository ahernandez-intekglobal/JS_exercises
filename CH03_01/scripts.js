let mul = function (a,b){
    let decRes = a * b;
    let strRes = ""
    while (decRes > 0){
        let rem  = decRes % 13;
        if (rem === 12){ strRes = 'C' + strRes}
        else if (rem === 11){ strRes = 'B' + strRes}
        else if (rem === 10){ strRes = 'A' + strRes}
        else{ strRes = rem + strRes}
        decRes = Math.trunc(decRes/13);
    }
    return Number(strRes);
}
var answer = mul(6,9);