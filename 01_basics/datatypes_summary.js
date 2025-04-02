/* Primitive Data Types in JavaScript:
1. Number: Represents both integer and floating-point numbers.
   Example: let num = 42;

2. String: Represents a sequence of characters.
   Example: let str = "Hello, World!";

3. Boolean: Represents a logical entity and can have two values: true or false.
   Example: let isTrue = true;

4. Undefined: Represents a variable that has been declared but not assigned a value.
   Example: let undef;

5. Null: Represents the intentional absence of any object value.
   Example: let empty = null;

6. Symbol: Represents a unique and immutable value, often used as object property keys.
   Example: let sym = Symbol("unique");

7. BigInt: Represents integers with arbitrary precision, useful for working with large integers.
   Example: let bigInt = 1234567890123456789012345678901234567890n;
*/


const score =100
const scoreValue =90.9

const isnLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

// array,objects , functions 

const heros = ['IronMan','Captain america','Thor','hulk'] //array

let  fitstobject = {
     name:"divyanshy maurya",
     age:22,
     isMale:true
} // object


const greet = function(){
    console.log("hello world");
}
// note: always non premitive datatypes typeof is object

// Primitive Data Types
console.log(typeof 42); // "number"
console.log(typeof "Hello, World!"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof Symbol("unique")); // "symbol"
console.log(typeof 1234567890123456789012345678901234567890n); // "bigint"

// Non-Primitive Data Types
console.log(typeof { name: "John", age: 30 }); // "object"
console.log(typeof [1, 2, 3, 4, 5]); // "object"
console.log(typeof function() { console.log("Hello, World!"); }); // "function"
console.log(typeof new Date()); // "object"
console.log(typeof /ab+c/); // "object"


//-------------------------*Stack memory*-------------------------

/* stack memory:
   -stack memory is used for static memory allocation .
   -it stores primitive data types(e.g. number, string, boolean
    , null, undefined, symbol, bigint) and references to obj.
   -Stack memory is fast and automatically managed(last-in, first-out).
    -Stack memory is limited in size.
    -Stack memory is used for function calls and local variables.
    -Stack memory is thread-safe.
    -Stack memory is not shared between threads.
    -Stack memory is not shared between processes.
    -Stack memory is not shared between applications.
    -Stack memory is not shared between users.
    -Stack memory is not shared between devices.
    -Stack memory is not persistent.
    -Stack memory is not portable.
    -Stack memory is not scalable. */

let age =22
let name ="divyanshu" //stack memory
let anotherName = name 
anotherName = "rahul"
console.log(name); // here the output will be divyanshu
console.log(anotherName); // and here the output will be rahul it means the value of name is not changed.

// its does not change the original value of the variable it only copy that value.


//-------------------------* heap memory*-------------------------




/* heap memory:
   -heap memory is used for dynamic memory allocation.
    -it stores reference types (e.g. objects, arrays, functions).
    -Heap memory is slower than stack memory.
    -Heap memory is manually managed (memory leaks can occur).
    -Heap memory is not limited in size.
    -Heap memory is used for large data structures.
    -Heap memory is not thread-safe.
    -Heap memory is shared between threads.
    -Heap memory is shared between processes.
    -Heap memory is shared between applications.
    -Heap memory is shared between users.
    -Heap memory is shared between devices.
    -Heap memory is persistent.
    -Heap memory is portable.
    -Heap memory is scalable. */

let user = {
    name:"divyanshu",
    age: 32,
    isMale:true
} //heap memory

let user1 = user
user1.name = "rahul"
user1.age =12

console.log(user);
console.log(user1);

//since, here when we change the value of user1 then it also change the value of user
//because both are pointing to the same memory location.