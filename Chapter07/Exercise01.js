'use strict'
// Create a function that will transform a hex number into an rgb format.
// 	 Example:
// 	 “#3020ff” 	 →   “rgb ( 48, 32, 255)”

function from16to10(num){
    if (/[0-9]/.test(num)) return Number(num);
    if (num === 'A' || num === 'a') return 10;
    if (num === 'B' || num === 'b') return 11;
    if (num === 'C' || num === 'c') return 12;
    if (num === 'D' || num === 'd') return 13;
    if (num === 'E' || num === 'e') return 14;
    if (num === 'F' || num === 'f') return 15;
}

function HEX2RGB(HEX){
    // If starts with # removes it
    let hex = HEX.replace(/^#/,'');
    // Check if is a valid hex string
    if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex))
        throw new Error('Invalid hex value');
    // If is 3 length string, duplicates all characters
    if (hex.length === 3)
        hex = hex.replace(/(.)/g, '$1$1');
    
    let decArray = Array.from(hex).map((x)=>from16to10(x));
    return(`rgb (${decArray[0]*16 + decArray[1]}, ${decArray[2]*16 + decArray[3]}, ${decArray[4]*16 + decArray[5]})`);

}

HEX2RGB("#fff")