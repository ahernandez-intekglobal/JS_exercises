'use strict'
// Create a button that can only be used 3 times. Indicate the usage of the button using the meter element. 
// Once the button has been pressed three times, it must not activate again.

function reverseCounter(start){
    let count = start;
    return function(){
        count -= 1;
        return count;
    }
}
let counterFunction = reverseCounter(3);


function usageCounter(){
    let button = document.getElementById("usageButton");
    let meter = document.getElementById("usageMeter");

    meter.value = counterFunction();
    if (meter.value === 0){
        button.disabled = true;
        button.textContent = `Disabled :c (remain ${meter.value})`;
    }
    else{
        button.textContent = `Click me (remain ${meter.value})`;
    }

}