// Array Operations

// Basic arrays
let array1 = [10, 20, 30, 40, 50];
let array2 = [60, 70, 80, 90, 100];
let car = ["Tata", "Mahindra", "Tesla", "Bugatti", "Ferrari"];

// Concatenation
let arrayResult = array1.concat(array2, car);

// Array creation
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// Array methods - push, pop, unshift, shift
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// Check includes and indexOf
// myArr.includes(9)
// myArr.indexOf(3)

// Join array
// const newArr = myArr.join()

// Slice and splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

// Spread operator
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const all_new_heros = [...marvel_heros, ...dc_heros];

// Flatten nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);

// Array.from and Array.of
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

// Push operation
var arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

// Concat with single element
var arrCars = ["Tata", "Tesla", "Ferrari", "Lamborghini", "Ducati"];
var arr2 = arrCars.concat("BMW");
console.log(arr2);