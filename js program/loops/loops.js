// Loops in JavaScript

// For Loop
for (let i = 0; i < 10; i++) {
    // console.log("Hello World");
}

// For loop with step
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// Reverse for loop
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}

// For loop with step 5
for (let i = 5; i < 51; i = i + 5) {
    console.log(i);
}

// Reverse with step 5
for (let i = 50; i > 4; i = i - 5) {
    console.log(i);
}

// Even numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// While Loop
let i = 0;
while (i < 10) {
    console.log("Namaste");
    i++;
}

// Do While Loop
let y = 5;
do {
    console.log(y);
    y = y + 5;
} while (y < 51);

// For...in Loop (for objects)
const myObject = {
    js: "Javascript",
    cpp: "C++",
    ks: "Kotlin",
    er: "Erlang"
};

for (const key in myObject) {
    console.log(myObject[key]);
}

// For...in for arrays
const cars = ["Tata", "Mahindra", "Tesla"];
for (const index in cars) {
    console.log(index, cars[index]);
}

// For...of Loop (for iterables)
let carList = ["Tata", "Mahindra", "Tesla"];
for (let car of carList) {
    console.log(car);
}

// For...of with array
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

// For...of with string
const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Fahrenheit to Celsius using regular for loop
const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const celsius = [];
for (let i = 0; i < fahrenheit.length; i++) {
    const f = fahrenheit[i];
    const c = ((f - 32) * 5 / 9).toFixed(1);
    celsius.push(c);
}
console.log(celsius);

// Countdown example
let count = 30;
const countdown = setInterval(() => {
    console.log(count);
    if (count === 0) {
        clearInterval(countdown);
    }
    count--;
}, 1000);