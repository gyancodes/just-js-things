// Function Declarations and Examples

function greet() {
    console.log("Namaste World");
}

function sayMyName() {
    console.log("G");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// Function with parameters and return
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
const result = addTwoNumbers(3, 5);

// Default parameter
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// Rest operator
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// Function with object parameter
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "sam",
    price: 399
});

// Function returning array element
const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}

// Callback function example
function doSomethingAsync(callback) {
    setTimeout(function() {
        callback('done');
    }, 3000);
}
doSomethingAsync(function(result) {
    console.log(result);
});

// Passing function as parameter (callback)
const lang = ["Java", "Javascript", "Kotlin", "C++", "Ruby", "Typescript"];
function printMe(item, index, arr) {
    console.log(item, index, arr);
}
lang.forEach(printMe);

// Object with method
let obj = {
    car: "Ferrari",
    make: 2022,
    func: function myCar(model) {
        console.log("The car model is " + model);
    }
};

// Event handler example
// document.addEventListener("click", function click() {
//     console.log("Clicked");
//     let conf = confirm("Are you sure?");
//     console.log(conf);
// });