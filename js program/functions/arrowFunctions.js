// Arrow Functions

// Basic arrow function - sum
const sum = (x, y) => {
    return (x + y);
};

// Arrow function with 'this' behavior demonstration
const myfunc = (number) => {
    console.log("The number is" + this);
};
myfunc();

// Object with arrow function - 'this' behavior
let myobj = {
    a: this,
    myfunc: (number) => {
        console.log("The number is" + this);
    }
};
myobj.myfunc();
console.log(myobj.a);

// Arrow functions as callbacks
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((sq) => {
    return Math.pow(sq, 2);
});

// Date formatting with arrow functions
const dates = ["2024-1-10", "2025-2-20", "2026-3-20"];
const formattedDates = dates.map((element) => {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
});

// setTimeout with arrow function
setTimeout(() => {
    console.log("callback");
}, 3000);

console.log("callback invoked");