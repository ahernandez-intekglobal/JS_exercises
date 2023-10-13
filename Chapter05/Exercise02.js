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

let users = [
    {
        name: "Alfonzo",
        room: "Accounting 04",
        floor: 1
    },
    {
        name: "Cecilia",
        room: "Marketing 03",
        floor: 2
    },
    {
        name: "Lizbeth",
        room: "HR 01",
        floor: 3
    },
    {
        name: "Sebastian",
        room: "Management 02",
        floor: 5
    },
    {
        name: "John",
        room: "Purchasing 03",
        floor: 2
    },
    {
        name: "Lizbeth",
        room: "Sales 02",
        floor: 1
    },
    {
        name: "David",
        room: "Management 02",
        floor: 5
    },
];

let equipment = [
  {
    name:"printer",
    sn:"E43574A0073",
    responsible:"David",
    room:"Management 01",
    floor: 5
  },
  {
    name:"fax",
    sn:"248902389AFT00038",
    responsible:"Lizbeth",
    room:"HR 01",
    floor: 3
  },
  {
    name:"printer",
    sn:"E43574A0085",
    responsible:"Sebastian",
    room:"Management 03",
    floor: 5
  },
  {
    name:"camera",
    sn:"93479534SD98237",
    responsible:"Cecilia",
    room:"Marketing 03",
    floor: 2
  },
  {
    name:"money counter",
    sn:"18593JDND095HN006",
    responsible:"Alfonzo",
    room:"Accounting 03",
    floor: 1
  }
  
]

class Equipment {
    constructor(name, SerialNumber, responsible = null, room = null, floor = null) {
        this.name = name;
        this.sn = SerialNumber;
        this.responsible = responsible;
        this.room = room;
        this.floor = floor;
    }
}

class User {
    constructor(name, room, floor) {
        this.name = name;
        this.room = room;
        this.floor = floor;
    }
}

class Building {
    constructor() {
        this.Equipment = [];
        this.People = [];
        this.userCache = {}; // Memoization cache for user search
        this.equipmentCache = {}; // Memoization cache for equipment search
    }
    // Searches the user to add by name
    // If user name already exists, add user to the same name entry.
    // Otherwise, add the user alphabetically.
    add(type,name, ...args) {
        let array, newObject;
        if (type === "user"){
            newObject = new User(name, ...args);
            array = this.People;
        }
        else if(type==="equipment"){
            newObject = new Equipment(name, ...args);
            array = this.Equipment;
        }
        else{
            throw new Error(`Type ${type} not valid. Expected "user" or "equipment"`)
        }
        if (array.length === 0)
            array.push({ name: name, matches: [newObject] });
        else {
            let leftPivot = 0;
            let rightPivot = array.length - 1;
            let middle = 0;
            let found = false;

            while (leftPivot <= rightPivot && !found) {
                middle = leftPivot + Math.floor((rightPivot - leftPivot) / 2);
                switch (array[middle].name.localeCompare(name)) {
                    case 1:
                        rightPivot = middle - 1;
                        break
                    case 0:
                        found = true;
                        break
                    case -1:
                        leftPivot = middle + 1;
                        break
                }
            }
            if (found) {
                array[middle].matches.push(newObject);
            }
            else {
                if (array[middle].name.localeCompare(name) === -1)
                    array.splice(middle + 1, 0, { name: name, matches: [newObject] })
                else
                    array.splice(middle, 0, { name: name, matches: [newObject] })
            }
        }
        console.log(`New ${type} added: ${newObject.name}`);
    }
    // Searches user or equipment by name
    // Returns objects that matches that name if exist
    // Retuns null if do not
    search(type, name) {
        let array, cache;
        if (type === "user") {
            array = this.People;
            cache = this.userCache;
        } else if (type === "equipment") {
            array = this.Equipment;
            cache = this.equipmentCache;
        } else {
            throw new Error(`Type ${type} not valid. Expected "user" or "equipment"`);
        }

        // Check if the result is already in the cache
        if (name in cache) {
            console.log(`Memoized ${type} search for ${name}`);
            return cache[name];
        }

        if (array.length === 0) {
            // Update the cache and return null if not found
            cache[name] = null;
        } else if (array.length === 1) {
            // Update the cache and return the result if there's only one entry
            cache[name] = array[0];
        } else {
            let leftPivot = 0;
            let rightPivot = array.length - 1;
            let middle = 0;

            while (leftPivot <= rightPivot) {
                middle = leftPivot + Math.floor((rightPivot - leftPivot) / 2);
                const comparison = array[middle].name.localeCompare(name);

                if (comparison === 0) {
                    // Update the cache and return the result if found
                    cache[name] = array[middle];
                    console.log(`Memoized ${type} search for ${name}`);
                    return array[middle];
                } else if (comparison === -1) {
                    leftPivot = middle + 1;
                } else {
                    rightPivot = middle - 1;
                }
            }
            // Update the cache and return null if not found
            cache[name] = null;
        }

        console.log(`Memoized ${type} search for ${name}`);
        return cache[name];
    }
}

let myBuilding = new Building();
for (let user of users) {
    myBuilding.add("user",user.name, user.room, user.floor);
}
for (let item of equipment) {
    myBuilding.add("equipment", item.name, item.sn, item.responsible, item.room, item.floor);
}
myBuilding.search("user","Lizbeth");
myBuilding.search("equipment","printer");