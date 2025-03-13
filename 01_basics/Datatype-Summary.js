//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 20
const scoreValue = 180.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('987')
const anotherId = Symbol('987')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["tawerat", "Bast", "khonshu"];
let myObj = {
    name: "himanshu",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3