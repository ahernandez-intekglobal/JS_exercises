let myMath = {
    add : function (...args){
        let res = 0;
        for(let num of args){
            res += num;
        }
        return res;
    },
    mul: function (...args){
        let res=1;
        for(let num of args){
            res *= num;
        }
        return res;
    },
    fact: function (num){
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