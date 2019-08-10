/*
* Hayden Key
*
*JavaScript Fundamentals
* 
* The following is my attempt to copy, manipulate, and just mess around with 
* the exercises in Mark Zamoyta's "JavaSciprt Fundamentals" course on PluralSight
* 
* I was unsure how to add multiple files and have them execute on this web server,
* so I just put all of the exercises in a single file.
*/

import { Car } from './models/car.js';
import { Vehicle } from './models/vehicle.js';

// Hello, World!

console.log("Hello World!");




/*
*  Language Features
*/

// Functions and Rest Parameters

function sendCars(day, ...carIds) {
    carIds.forEach( id => console.log(id) );
}

sendCars("Monday", 1, 2, 3);



// Destructuring Arrays

carIds = [100, 200, 300];
let car1, car2, theRest; 
[, car2, ...theRest]= carIds;

console.log(car1, car2, theRest);



// Destructuring Objects

let car = { id: 5000, style: 'convertible'};
let style;
({ id, style } = car);

console.log(id, style);



// Spread Syntax

function startCars(car1, car2, car3, ...rest) {
    console.log(rest);
}

let carIds = [1, 2, 3, 4, 5, 6];
startCars(...carIds);



// Common Type Conversions

// convert string to integer
Number.parseInt('55');    // 55 becomes a number

// convert string to number
Number.parseFloat('55.99');

// test
console.log( typeof(Number.parseFloat('55.88ABC')));



// for loops
for (let i = 0; i < 5; i++) {
    if (i === 3)
        continue;
    console.log(i);
}




/*
*  Operators
*/

// Equality Operators

// == is equality (will do type conversion)
// === is strict equality (will not do type conversion)
console.log(1==true);    // true
console.log(1===true);    // false

let id = 123;
console.log(id == "123");    // true
console.log(id === "123");    // false



// Unary Operators

let year = 1967;
console.log(year++);
console.log(year);

year = "1967";
console.log(typeof( +year ));    // gives number

year = "1967";
console.log( -year );    // inverts number sign




// Logical Operators

let var1 = true;
let var2, var3 = false;

if (var1 > 5 && var2 < 100) {
    console.log("first block executes");
}

if (var1 > 5 || var2 < 100) {
    console.log("second block executes");
}

if (var1 > 5 || var2 < 100 && var3 === 5) {
    console.log("third block executes");
}

if ((var1 > 5 || var2 < 100) && var3 === 5) {
    console.log("fourth block executes");
}

let userSettings = {};
let defaultSettings = { name: 'Default'};

console.log( userSettings || defaultSettings );

userSettings = {name: 'Joe' };

console.log( userSettings || defaultSettings );
console.log( userSettings && defaultSettings );


car = null;
if( !car ) {
    car = { name: "something valid"};
}



// Relational Operators ( > < >= <= )

// all uppercase characters are less than lowercase
console.log("Zoo" < "alphabet");

let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(true);
}
else {
    console.log(false);
}



// Conditional Operator

console.log( (5 > 4) ? 'yes' : 'no' );    // yes



// Assignment Operators

console.log(var1 += 10);
console.log(var1 -= 10);
console.log(var1 /= 10);
console.log(var1 *= 10);
console.log(var1 %= 10);

// takes bit values and shifts them one place
console.log(var1 <<= 1);
console.log(var1 >>= 1);

// takes bit and shifts them, but keeps the sign
console.log(var1 >>>= 1);

year = 1964;
year += 10;
console.log( year );

year = 1964;
year -= 10;
console.log( year );

year = 1964;
year <<= 1;
console.log( year );

year = 1964;
year >>= 1;
console.log( year );

year = 1964;
year >>>= 1;
console.log( year );





/*
*  Functions and Scope
*/

// Function and Block Scope
function startCar(carId) {
    let message = "starting...";
    let startFn = function turnKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message);
}

startCar(123);



// Block Scope
let message = 'Outside';
if (5 === 5) { 
    let message = "Equal";
    console.log(message);
}
console.log(message);


// IIFE
// Immediately Invoked Function Expression

// is useful as a closure
// this function does not have a name and is invoked as soon as it is created
(function() {
    console.log("in function");
})();

let app = (function() {
    let cardId = 123;
    console.log('in function');
    return {};
})();

console.log(app);



// Closures
// Use this when variables need to be upgraded to last outside of their original scope

app = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return {
        getId: getId
    };
})();
console.log( app.getId() );



// The 'this' keyword
let fn = function() {
    console.log(this === window);
};

fn(); // true


let o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};

console.log( o.getId() ); // 123



// call and apply

// call
// call changes what 'this' is reffering to
o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};

let newCar = { carId: 456};

console.log( o.getId.call(newCar) );

// apply
// same as call, only it can pass parameters
o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
console.log( o.getId.apply(newCar, ['ID: ']) );



// bind
// copies function, and assigns something else to 'this'
o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};

newCar = { carId: 456 };
let newFn = o.getId.bind(newCar);  // makes copy and 'this' becomes newCar
console.log( newFn() );    // 456



// Arrow Functions
// they do not have "this" variables

let getId = () => 123; // brackets just mean no parameters

console.log( getId() ); //123


getId = prefix => prefix + 123;
console.log( getId('ID: ') );

// if function has more than one parameter, parenthesis is needed
getId = (prefix, suffix) => prefix + 123 + suffix;
console.log( getId('ID: ', '!') );

// if more complex logic is needed:
getId = (prefix, suffix) => {
    return prefix + 123 + suffix;
};

console.log( getId('ID: ', '!') );



// Default Parameters
let trackCar = function(carId, city='NY') {
    console.log('Tracking ' + carId + ' in ' + city + '.');
};

console.log( trackCar(123) );    
// Tracking 123 in NY.
console.log( trackCar('123', 'Chicago') );
// Tracking 123 in Chicago.




/*
* Objects and Arrays
*/

// // Constructor Functions
// function Car(id) {
//     this.carId = id;
//     this.start = function() {
//         // must add "this" to attributes of object to reference them
//         console.log("start: " + this.carId);
//     };
// }

// car = new Car(123);
// car.start();



// Prototypes

// Without Prototypes
// if we make a million car objects, we will have to make a million copies of
// the start function, so we will use prototypes
// function Car(id) {
//     this.carId = id;
//     this.start = function() {
//         console.log('start: ' + this.carId);
//     };
// }

// car = new Car(123);
// car.start();  // start: 123

// Prototypes
// Makes it so that you can 
function CarConstructor(id) {
    this.carId = id;
}

CarConstructor.prototype.start = function() {
    console.log('start: ' + this.carId);
};

car = new CarConstructor(123);
car.start();   // start: 123



// Expanding Objects Using Prototypes
String.prototype.hello = function() {
    return this.toString() + ' Hello';
};

console.log('foo'.hello());    // foo Hello



// JSON - JavaScript Object Notation
// Used to send JavaScript Objects over the wire
// car = {
//     id: 123,
//     style: 'convertible'
// };

console.log( JSON.stringify(car) );
//  {"id":123, "style":"convertible"}


carIds = [
    { carId: 123 },
    { carId: 456 },
    { carId: 798 }
];
console.log( JSON.stringify(carIds) );

let jsonIn = 
`
    [
        {"carId": 123},
        {"carId": 456},
        {"carId": 798}
    ]
`;

carIds = JSON.parse(jsonIn);
console.log( carIds );
console.log( JSON.stringify(carIds) );



// Array Iteration
carIds = [
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible'  },
    { carId: 789, style: 'sedan'  }
];

carIds.forEach( car => console.log( car ) );

carIds.forEach((car, index) => console.log( car, index ));

// Array Filtering
let convertibles = carIds.filter(
    car => car.style == 'convertible'
);

console.log(convertibles);

// Array Testing
// Confirms if every element has a carId
let result = carIds.every(
    car => car.carId > 0
);

console.log(result);

// Find a result
car = carIds.find(
    car => car.carId > 500
);

console.log(car);





/*
*
* Classes and Modules
* 
*/

// class Car {
//     constructor(id) {
//         this.id = id;
//     }
//     identify(suffix) {
//         return 'Car ID: ' + this.id + suffix;
//     }
// }

// car = new Car(123);
// console.log( car.identify('!!!') );    // Car Id: 123

car = new Car();
console.log( car.type );   // car




/*
*
*
* Programming the DOM and BOM
*
*/



// The window Object

// year = 1956; // throws error without let, but with no module, it would execute fine 
// console.log(window.year);

// console.log(window.innerWidth);

// let timeoutId = setTimeout( function() {
//     console.log('1 second has passed');
// }, 1000);

// // if need to cancel...
// clearTimeout(timeoutId); // executes once



// let intervalId = setInterval( function() {
//     console.log('1 second has passed');
// }, 1000);

// // if need to cancel...
// clearInterval(intervalId);


// the location object
console.log(location.href);

// the Document Object

// Selecting DOM elemenets
console.log(document.getElementById('elementId'));
document.getElementsByClassName('className');
document.getElementsByTagName('tagName');