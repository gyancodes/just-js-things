// Closures, Scope, and Async JavaScript

// Scope Example
var globalVar = "I am a global variable";

function myFunction() {
    var functionVar = "I am a function variable";
    console.log(globalVar);
    console.log(functionVar);

    if (true) {
        let blockVar = "I am a block variable";
        console.log(blockVar);
    }
}
myFunction();
console.log(globalVar);

// Scope Chain
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
a();

// Closures
function z() {
    var b = 700;
    function x() {
        var a = 100;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();

/*
Uses of closures:
1. Module design pattern
2. Currying
3. Function like once
4. Memoize
5. Maintaining state in async world
6. setTimeouts
7. Iterators
*/

// setTimeout demonstration
function hello() {
    console.log("Welcome");
}
hello();

// Another example with async callback
// document.addEventListener("click", function click() {
//     console.log("Clicked");
//     let conf = confirm("Are you sure?");
//     console.log(conf);
// });

// setTimeout as callback
setTimeout(() => {
    console.log("callback");
}, 3000);
console.log("callback invoked");

// Async callback pattern
function doSomethingAsync(callback) {
    setTimeout(function() {
        callback('done');
    }, 3000);
}
doSomethingAsync(function(result) {
    console.log(result);
});