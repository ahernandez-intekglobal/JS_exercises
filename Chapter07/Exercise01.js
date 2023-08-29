'use strict'
// Create a function that will transform a hex number into an rgb format.
// 	 Example:
// 	 “#3020ff” 	 →   “rgb ( 48, 32, 255)”

function HEX2RGB(HEX){
    // Check if is a valid hex string
    let regex6dig = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
    let regex3dig = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/;
    let R,G,B;
    if (regex6dig.test(HEX)){
        [R,G,B] = HEX.match(regex6dig).slice(1,4).map(x => parseInt(x,16));
    }
    // If is 3 length string, duplicates all characters
    else if (regex3dig.test(HEX)){
        [R,G,B] = HEX.match(regex3dig).slice(1,4).map(x => parseInt(x+x,16));
    }
    else{
        throw new Error('Invalid hex value');
    }
    return(`rgb (${R}, ${G}, ${B})`);

}

console.log(HEX2RGB("#00AAFC"));