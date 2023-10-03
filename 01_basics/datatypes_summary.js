// # Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 6346324273764n



// # Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Akshay","Robot","sunnydeol"]
let myObj = {
    name : "Tej",
    age: 19,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// js in memory work
// Stack (Primitve) inside value are copy, Heap (Non-Primitive) inside value are reference

let myName = "Tejasw"

let anotherName = myName
anotherName = "Tej"
console.log(myName);
console.log(anotherName);

let userOne = {
    email:"tej@google.com",
    upi:"tej@ybl"
}

let userTwo = userOne;
userTwo.email = "singh@google.com"

console.log(userOne.email);
console.log(userTwo.email);