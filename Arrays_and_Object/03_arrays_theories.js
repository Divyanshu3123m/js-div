/*
What is an Array in JavaScript?
An array in JavaScript is a special type of object that allows you to store multiple values in a single variable. Arrays are used to group related data together and provide methods to manipulate and access that data efficiently.

Key Features of Arrays

Indexed Collection:
Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple

Dynamic:
Arrays in JavaScript are resizable, meaning you can add or remove elements dynamically.

Mixed Data Types:
Arrays can store elements of different data types (numbers, strings, objects, etc.).
const mixedArray = [42, "hello", true, { key: "value" }];

Built-in Methods:
JavaScript arrays come with many built-in methods for adding, removing, and manipulating elements.

How to Create an Array:
There are two common ways to create arrays in JavaScript:

Using Array Literals (Preferred):

Syntax: const arrayName = [element1, element2, ...];
Example:
const fruits = ["apple", "banana", "cherry"];

Using the Array Constructor:
Syntax: const arrayName = new Array(element1, element2, ...);
Example:
const numbers = new Array(1, 2, 3, 4, 5);


Basic Operations on Arrays:

Accessing Elements:
Use the index to access elements.
Example:
const fruits = ["apple", "banana", "cherry"];

Adding Elements:
At the End: Use push().
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Output: banana

At the Beginning: Use unshift().
fruits.unshift("mango");
console.log(fruits); // Output: ["mango", "apple", "banana", "cherry"]

Removing Elements:
From the End: Use pop().
fruits.pop();
console.log(fruits); // Output: ["mango", "apple", "banana"]


From the Beginning: Use shift().
fruits.shift();
console.log(fruits); // Output: ["apple", "banana"]

Updating Elements:
Use the index to update an element.
Example:
const fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]



Common Array Methods
push(): Adds an element to the end of the array.
pop(): Removes the last element from the array.
shift(): Removes the first element from the array.
unshift(): Adds an element to the beginning of the array.
splice(): Adds or removes elements at a specific index.
slice(): Returns a shallow copy of a portion of the array.
concat(): Combines two or more arrays.
join(): Converts the array to a string, with elements separated by a specified delimiter.
indexOf(): Returns the index of the first occurrence of an element.
includes(): Checks if an element exists in the array.





When to Use Arrays
Use arrays when you need to store and manipulate a list of related data.
Examples:
A list of student names.
A collection of numbers for calculations.
A set of objects representing items in a shopping cart.


*/