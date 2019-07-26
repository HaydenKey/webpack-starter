
// Hello, World!

// console.log("Hello World!");




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