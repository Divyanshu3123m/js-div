/*---------------Control Flow -------------------------------
    -- Control flow is the order in which individual statements, instructions or function calls are executed or evaluated.
    -- In JavaScript, control flow is determined by the structure of the code and the use of control flow statements such as loops, conditionals, and functions.
    -- Control flow statements allow you to control the order in which code is executed based on certain conditions or criteria.
    -- The most common control flow statements in JavaScript are:
        -- 1. Conditional Statements: if, else if, else, switch
        -- 2. Loops: for, while, do while, forEach
        -- 3. Functions: function declarations, function expressions, arrow functions
    -- 4. Exception Handling: try, catch, finally, throw
    -- 5. Break and Continue: break, continue, return
    -- 6. Ternary Operator: (condition) ? expr1 : expr2
    -- 7. Logical Operators: &&, ||, !
    -- 8. Comparison Operators: ==, ===, !=, !==, <, >, <=, >=
    -- 9. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
    -- 10. Assignment Operators: =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=
    -- 11. Spread Operator: ...
    -- 12. Destructuring Assignment: {a, b} = {a: 1, b: 2}
    -- 13. Template Literals: `Hello ${name}`
    -- 14. Default Parameters: function add(a, b = 0) { return a + b; }
    -- 15. Rest Parameters: function add(...args) { return args.reduce((a, b) => a + b); }
    -- 16. Optional Chaining: obj?.property
    -- 17. Nullish Coalescing: a ?? b


    <,>,<=,>=,==,!=,===,!==,


*/

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    // console.log("Allow to buy course");
}

const loggedInFromGoogle = true
const loggedInFacebook = false
if(loggedInFromGoogle || loggedInFacebook){
    console.log("Allow user to buy courses from google or facebook acc.");
}

const temp = 21;
if (temp === 21){
    // console.log("temperature is 21 degree celsius");
}
else{
    // console.log("temp is not greater than 21");
}
const score =101
if(score>100){
    const power = "fly"
    var level = "o level"
    // console.log(`user power: ${power}`);
    // console.log(`user level: ${level}`);
}
// console.log(`user score: ${score}`);// this will be printed even if the score is greater than 100
// console.log(`user power: ${power}`); // this will give an error because power is not defined in this scope
//  console.log(`user level: ${level}`);// this will not give an error because var is global variable and can be accessed outside the block scope.

