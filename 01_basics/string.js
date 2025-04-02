// Strings:-
/*  
    -Strings are used to represent text.
    -Strings are immutable (they cannot be changed).
    -Strings are reference types.
    -Strings are stored in heap memory.
    -Strings can be created using single qoutes (''), double quotes (""), or backticks (``).  
    -Strings can be concatenated using the + operator.
    -Strings can be compared using the === operator.
    -Strings have a length property.
    -Strings have various methods like toUpperCase(), toLowerCase(), charAt(), indexOf(), etc.
    -Strings can be accessed using bracket notation or dot notation.
    -Strings can be converted to numbers using parseInt() and parseFloat().
    -Strings can be converted to arrays using the split() method.
    -Strings can be formatted using template literals.
    -Strings can contain escape sequences like \n (newline), \t (tab), \\ (backslash), etc.
    -Strings can be compared using the localeCompare() method.
    -Strings can be trimmed using the trim() method.
    -Strings can be repeated using the repeat() method.
    -Strings can be checked for substrings using the includes() method.
    -Strings can be checked for prefixes using the startsWith() method.
    -Strings can be checked for suffixes using the endsWith() method.
    -Strings can be replaced using the replace() method.
    -Strings can be searched using the search() method.
    -Strings can be split into substrings using the slice() method.
    -Strings can be joined using the join() method.
    -Strings can be reversed using the reverse() method.
    -Strings can be sorted using the sort() method.




 */

   
















































    // Strings Examples:

// 1. Strings are used to represent text
let text = "Hello, World!";
console.log(text); // Output: Hello, World!

// 2. Strings are immutable
let immutableStr = "Hello";
immutableStr[0] = "h"; // This won't change the string
console.log(immutableStr); // Output: Hello

// 3. Strings are reference types (stored in heap memory)
let str1 = "Hello";
let str2 = str1; // Both refer to the same value
console.log(str1 === str2); // Output: true

// 4. Strings can be created using single quotes, double quotes, or backticks
let singleQuote = 'Single Quote';
let doubleQuote = "Double Quote";
let backtick = `Backtick`;
console.log(singleQuote, doubleQuote, backtick);

// 5. Strings can be concatenated using the + operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// 6. Strings can be compared using the === operator
console.log("abc" === "abc"); // Output: true
console.log("abc" === "ABC"); // Output: false

// 7. Strings have a length property
let lengthStr = "Hello";
console.log(lengthStr.length); // Output: 5

// 8. Strings have various methods like toUpperCase(), toLowerCase()
let caseStr = "Hello";
console.log(caseStr.toUpperCase()); // Output: HELLO
console.log(caseStr.toLowerCase()); // Output: hello

// 9. Strings can be accessed using bracket notation or dot notation
let accessStr = "Hello";
console.log(accessStr[0]); // Output: H
console.log(accessStr.charAt(1)); // Output: e

// 10. Strings can be converted to numbers using parseInt() and parseFloat()
let numStr = "42";
console.log(parseInt(numStr)); // Output: 42
console.log(parseFloat("42.5")); // Output: 42.5

// 11. Strings can be converted to arrays using the split() method
let splitStr = "Hello,World";
console.log(splitStr.split(",")); // Output: [ 'Hello', 'World' ]

// 12. Strings can be formatted using template literals
let name = "John";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is John and I am 30 years old.

// 13. Strings can contain escape sequences
let escapeStr = "Hello\nWorld\t!";
console.log(escapeStr); // Output: Hello (newline) World (tab) !

// 14. Strings can be compared using the localeCompare() method
console.log("a".localeCompare("b")); // Output: -1 (a comes before b)

// 15. Strings can be trimmed using the trim() method
let trimStr = "   Hello   ";
console.log(trimStr.trim()); // Output: Hello

// 16. Strings can be repeated using the repeat() method
let repeatStr = "Hello ";
console.log(repeatStr.repeat(3)); // Output: Hello Hello Hello 

// 17. Strings can be checked for substrings using the includes() method
let includesStr = "Hello, World!";
console.log(includesStr.includes("World")); // Output: true

// 18. Strings can be checked for prefixes using the startsWith() method
console.log(includesStr.startsWith("Hello")); // Output: true

// 19. Strings can be checked for suffixes using the endsWith() method
console.log(includesStr.endsWith("!")); // Output: true

// 20. Strings can be replaced using the replace() method
let replaceStr = "Hello, World!";
console.log(replaceStr.replace("World", "JavaScript")); // Output: Hello, JavaScript!

// 21. Strings can be searched using the search() method
console.log(replaceStr.search("World")); // Output: 7 (index of "World")

// 22. Strings can be split into substrings using the slice() method
let sliceStr = "Hello, World!";
console.log(sliceStr.slice(0, 5)); // Output: Hello

// 23. Strings can be joined using the join() method (used with arrays)
let joinArray = ["Hello", "World"];
console.log(joinArray.join(", ")); // Output: Hello, World

// 24. Strings can be reversed using the reverse() method (requires converting to array first)
let reverseStr = "Hello";
console.log(reverseStr.split("").reverse().join("")); // Output: olleH

// 25. Strings can be sorted using the sort() method (requires converting to array first)
let sortStr = "dcba";
console.log(sortStr.split("").sort().join("")); // Output: abcd