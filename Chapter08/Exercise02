'use strict'
// Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
// Use only 1 timer/interval to control all three functions. 

function caller(count){
    function A(){
        console.log("I'm executing function A");
    }
    function B(){
        console.log("I'm executing function B");
    }
    function C(){
        console.log("I'm executing function C");
    }
    
    if (count % 2 === 0) A();
    if (count % 4 === 0) B();
    if (count % 5 === 0) C();

}

function counter(){
    let count = 0;
    return function(){
        count += 1;
        if (count === 10) count = 0;
        caller(count);
    }
}

let callerABC = counter()
setInterval(callerABC, 15*1000)