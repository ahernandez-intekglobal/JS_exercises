'use strict'
// Create a custom object type that will hold a number value. 
//     [a] Make sure that no other data type can be assigned to that variable. 
//     [b] It must hold ONLY numbers.

let OnlyNumber = class{
    #value;
    constructor(newValue = 0){
        if(typeof newValue !== 'number')
            throw new Error(`Parameter type "${typeof newValue }" is not a number!`);
        else
            this.#value = newValue;
    }
    get value(){
        return this.#value;
    }
    set value(newValue){
        if(typeof newValue !== 'number')
            throw new Error(`Parameter type "${typeof newValue }" is not a number!`);
        else
            this.#value = newValue;
    }
}

let onlyNumber = new OnlyNumber(3);
onlyNumber.value = 5;
onlyNumber.value = [];