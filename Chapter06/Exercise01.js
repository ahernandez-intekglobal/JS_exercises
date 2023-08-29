'use strict'
// Create a set of object types that describe a series of related objects that may share behavior and/or attributes. Code the example and another set of classes different from the example. Add properties/methods as needed. 
// 	 Example:
// 	   Shape { pEdges, fnDisplay }
//     Quadrilateral is Shape { fnArea, fnPerimeter} 
//     Square is Quadrilateral { }
//     Triangle is Shape {fnArea, fnPerimeter}


//// Class definition
class Shape {
    constructor(...args) {
        this._edges = [];
        if (args.length !== 0){
            for (let edge of args) {
                this.addEdge(edge);
            }
            if (this._edges[0][0].toString() !== this._edges[this._edges.length - 1][1].toString())
                throw new Error(`The shape is not closed. First point ${this._edges[0][0]} should be equal to last point ${this._edges[this._edges.length - 1][1]}`)
        }
    }
    Display() {
        for (let edge of this._edges) {
            console.log(edge);
        }
    }
    set edges(EDGES) {
        this._edges = [];
        for (let edge of EDGES) {
            this.addEdge(edge);
        }
        if (this._edges[0][0].toString() !== this._edges[this._edges.length - 1][1].toString())
            throw new Error(`The shape is not closed. First point ${this._edges[0][0]} should be equal to last point ${this._edges[this._edges.length - 1][1]}`)
    }
    validEdge(edge) {
        // check correct type of entry
        if (!Array.isArray(edge) || edge.length !== 2 ||
            edge.some(x => !Array.isArray(x) || x.length !== 2) ||
            edge.some(x => x.some(y => typeof y !== 'number' || isNaN(y))))
            return false
        return true
    }
    addEdge(newEdge) {
        // Validate format of edge
        if (!this.validEdge(newEdge))
            throw new Error(`Edge type is not valid ${newEdge}. Expected [[x1,y1],[x2,y2]]`)
        if (this._edges.length === 0) {
            this._edges.push(newEdge);
        }
        else {
            // Check that the edge doesnt already exist
            for (let edge of this._edges) {
                if (edge.toString() === newEdge.toString()) {
                    console.log("Edge already in shape");
                    return
                }
            }
            // Check that is connected with last edge
            // lastEdge[1] === newEdge[0]
            if (this._edges[this._edges.length - 1][1].toString() !== newEdge[0].toString())
                throw new Error(`New edge ${newEdge} is not connected with last edge ${this._edges[this._edges.length - 1]}`)
            this._edges.push(newEdge);
        }
    }
    getSideLengths(){
        let {hypot, abs} = Math
        let sides = []
        for (let i=0; i<this._edges.length; i++)
            sides.push(hypot(abs(this._edges[i][0][0] - this._edges[i][1][0]), abs(this._edges[i][0][1] - this._edges[i][1][1])));
        return sides;
    }
    Perimeter() {
        let sides = this.getSideLengths();
        return sides.reduce((sum, length) => sum + length, 0);
    }
}

class Quadrilateral extends Shape {
    constructor(...args) {
      super(...args);
        if (this._edges.length !== 4)
            throw new Error(`Invalid number of edges ${args.length}. Expected 4`);
    }
    // Area function using Coolidge's formula
    Area() {
        // Calculates sides
        let sides = this.getSideLengths();
        // Calculates diagonals
        let diagonals = this.getDiagonals()
        // 1/4(sqrt(4p^2q^2 - (b^2+d^2-a^2c^2)^2))
        return (0.25 * (Math.sqrt(4 * (diagonals[0]**2) * (diagonals[1]**2) - (sides[1]**2 + sides[3]**2 - sides[0]**2 - sides[2]**2)**2)));
    }
    getDiagonals(){
        let { hypot, abs } = Math;
        let diagonals = [];
        for(let i=0; i<2; i++)
            diagonals.push(hypot(abs(this._edges[i][0][0] - this._edges[i+2][0][0]), abs(this._edges[i][0][1] - this._edges[i+2][0][1])));
        return diagonals;
    }
}

class Square extends Quadrilateral {
    constructor(...edges) {
        super(...edges);
        if (!this.isSquare()) {
            throw new Error(`The provided edges do not form a square.`);
        }
    }

    isSquare() {
        let sides = this.getSideLengths();
        let diagonals = this.getDiagonals();
        let tolerance = 0.000001;
        let sameLengthSides = sides.every((length, index, array) =>Math.abs(length - array[0]) < tolerance)
        let sameLengthDiagonal = diagonals[0] === diagonals[1]
        return sameLengthDiagonal && sameLengthSides;
    }
}

class Triangle extends Shape {
    constructor(edges) {
        super(...edges);
        if (this._edges.length !== 3) {
            throw new Error(`The provided edges do not form a triangle.`);
        }
    }
    // Area function using Heron's formula
    Area() {
        // s refer to semiperimeter
        let s = this.Perimeter()/2;
        let sides = this.getSideLengths();
        // Heron's formula sqrt(s*(s-a)*(s-b)*(s-c))
        return Math.sqrt(s * (s - sides[0]) * (s - sides[1]) * (s - sides[2]));
    }
}

// Data for test shapes
let edgesOfTriangle = [
    [[0, 0], [1, 0]],
    [[1, 0], [0.5, 1]],
    [[0.5, 1], [0, 0]]
];

let edgesOfRotatedSquare = [
    [[0, 0], [1, 1]],
    [[1, 1], [2, 0]],
    [[2, 0], [1, -1]],
    [[1, -1], [0, 0]],
];

let trapezoidEdges = [
    [[0, 0], [4, 0]],
    [[4, 0], [2, 2]],
    [[2, 2], [1, 2]],
    [[1, 2], [0, 0]]
];

// Testing
let myRotatedSquare = new Square(...edgesOfRotatedSquare);
let myTrapezoid = new Quadrilateral(...trapezoidEdges);
let myTriangle = new Triangle(edgesOfTriangle);

console.log("Rotated Square Area:", myRotatedSquare.Area());
console.log("Trapezoid Area:", myTrapezoid.Area());
console.log("Triangle Area:", myTriangle.Area());

console.log("Rotated Square Perimeter:", myRotatedSquare.Perimeter());
console.log("Trapezoid Perimeter:", myTrapezoid.Perimeter());
console.log("Triangle Perimeter:", myTriangle.Perimeter());