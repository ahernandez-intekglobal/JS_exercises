let Image = class{
    constructor(data, width, height, name){
        this.data = data;
        this.width = width;
        this.height = height;
        this.name = name;
    }
    getPixel(col,row){
        return this.data[col*this.width + row];
    }
}

var data = new Array(1600).fill().map((_, i) => i); // 40 x 40 px dummy image data
var img = new Image (data, 40, 40, `myImage`);
img.width; // 40
img.height; // 40
img.name; // ‘myImage’
img.getPixel(13, 7); // returns the color of the pixel at that position 13*40 + 7 = 527
