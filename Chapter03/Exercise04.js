'use strict'
// Create a custom object that will hold an image’s mock information such as pixel color data, image size, and name. It must be able to return the information.
// Example:
//     var data = new Array (1600); // 40 x 40 px dummy image data
//     var img = new Image (data, 40, 40, ‘myImage’);
//     img.width; // 40
//     img.height; // 40
//     img.name; // ‘myImage’
//     img.getPixel(20, 4); // returns the color of the pixel at that position. 


class Image{
    constructor(data, width, height, name){
        if (width*height !== data.length)
            throw new Error(`Data length (${data.length}) does not match with width (${width}) and height (${height})`)
        this.data = data;
        this.width = width;
        this.height = height;
        this.name = name;
    }
    getPixel(col,row){
        if(col<0 || col>this.height-1 ||
            row<0 || row>this.height-1)
            throw new Error(`Pixel (${col},${row}) is out of image dimensions`);
        return this.data[col*this.width + row];
    }
}

var data = new Array(1600).fill().map((_, i) => i); // 40 x 40 px dummy image data
var img = new Image (data, 40, 40, `myImage`);
img.width; // 40
img.height; // 40
img.name; // ‘myImage’
img.getPixel(13, 7); // returns the color of the pixel at that position 13*40 + 7 = 527
