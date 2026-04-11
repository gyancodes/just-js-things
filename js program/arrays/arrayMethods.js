// Array Methods - Map, Filter, Reduce, forEach

// Map method
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((sq) => {
    return Math.pow(sq, 2);
});

// Fahrenheit to Celsius conversion using map
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
var celsius = fahrenheit.map((elem) => {
    return Math.round(((elem - 32) * 5) / 9);
});

// Filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
    return num > 4;
});

// Chaining map and filter
const chainedNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

// Reduce method
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 0);

// forEach method
const lang = ["js", "ruby", "java", "python", "golang"];
lang.forEach((item) => {
    console.log(item);
});

lang.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// Array of objects with forEach
const myObj = [
    { languageName: "Javascript", languageFileName: "js" },
    { languageName: "Python", languageFileName: "py" },
    { languageName: "Java", languageFileName: "java" },
    { languageName: "Golang", languageFileName: "go" },
];

myObj.forEach((item) => {
    console.log(item.languageFileName);
});

// forEach with modifying array
let numArray = [1, 2, 3, 4, 5];
numArray.forEach(double);
numArray.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}

// Loop implementation of map (custom map)
const selfMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    let mappedArr = Array();
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        mappedArr[i] = fn.call(context, arr[i], i, this);
    }
    return mappedArr;
};