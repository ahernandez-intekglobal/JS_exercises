'use strict'
// Implement the following:
//     [a] A large building has many people and pieces of equipment. A new tech-support employee has been hired
//     to help out solve users’ problems and fix broken equipment. The new employee is still unfamiliar with the
//     layout but is doing his best to keep track of where everyone and everything is.
//         [i] Implement a structure that represents the building.
//             [1]Must contain data types representing equipment and users.
//         [ii] Equipment can be associated with rooms or specific people
//         [iii] Each piece of equipment and person is associated with a specific floor and room.
//         [iv] The new tech-support employee must be able to find users and equipment as quickly as possible.

let floors = ["f1","f2","f3","f4","f5"];

class Equipment{
    constructor(SerialNumber, name=null, responsible=null, room=null, floor=null){
        this.sn = SerialNumber;
        this.name = name;
        this.responsible = responsible;
        this.room = room;
        this.floor = floor;
    }
}

class User{
    constructor(name, room, floor){
        this.name = name;
        this.room = room;
        this.floor = floor;
    }
}

class Bulding{
    constructor(){
        this.Equipment = [];
        this.People = [];
    }
}