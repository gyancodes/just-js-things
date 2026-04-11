// Objects in JavaScript

// Object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Gyan",
    "full name": "Gyan Prakash",
    [mySym]: "mykey1",
    age: 18,
    location: "India",
    email: "gyan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Object modification
JsUser.email = "gyan@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "gyan@microsoft.com";

// Object methods
JsUser.greeting = function () {
    console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Singleton object
// const tinderUser = new Object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

// Spread operator for objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };
const obj3 = { ...obj1, ...obj2 };

// Array of objects
const users = [
    { id: 1, email: "g@gmail.com" },
    { id: 2, email: "g@gmail.com" },
    { id: 3, email: "g@gmail.com" },
];

// Object methods
// Object.keys(tinderUser)
// Object.values(tinderUser)
// Object.entries(tinderUser)
// tinderUser.hasOwnProperty('isLoggedIn')

// Destructuring
const course = {
    coursename: "spring boot",
    price: "999",
    courseInstructor: "gyan"
};
const { courseInstructor: instructor } = course;
console.log(instructor);

// Class example
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

let myCar = new Car("Bugatti");
console.log(myCar.present());