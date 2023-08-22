'use strict'
// Create a set of object types that describe a series of related objects that may share behavior and/or attributes. Code the example and another set of classes different from the example. Add properties/methods as needed. 
// 	 Example:
// 	   Shape { pEdges, fnDisplay }
//     Quadrilateral is Shape { fnArea, fnPerimeter} 
//     Square is Quadrilateral { }
//     Triangle is Shape {fnArea, fnPerimeter}

class Shape{
    constructor(){
        this._edges = [];
    }
    Display(){
        for(let edge of this._edges){
            console.log(edge);
        }
    }
    set edges(EDGES){
        this._edges = [];
        for(let edge of EDGES){
            this._edges.push(edge);
        }
    }
    add_edge(newEdge){
        for (let edge of this._edges){
            if (edge.toString() === newEdge.toString()){
                return
            }
        }
        this._edges.push(newEdge)
    }

}

class Quadrilateral extends Shape{
    constructor(){
        this._edges = [];
    }
    Area(){
        
    }
}