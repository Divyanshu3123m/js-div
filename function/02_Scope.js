/* Scope:-
   - Scope is the visibility of variables in a program.
    It defines where a variable can be accessed or modified.


   - In JavaScript, there are two types of scope: 
   1-Global Scope 
   2- Local Scope.


    1- Global Scope:
      Variables declared outside of any function or block are in the global scope and 
       can be accessed from anywhere in the code.
    2- Local Scope: 
      Variables declared inside a function or block are in the local scope and
       can only be accessed within that function or block.

    - There are two types of local scope:
     a- Function Scope 
     b- Block Scope. 


    - Function Scope: 
      Variables declared inside a function are in the function scope and
       can only be accessed within that function.
    - Block Scope:
     Variables declared inside a block (e.g., if statement, for loop) are in the block scope and
      can only be accessed within that block.
    - Block scope is created using let and const keywords.


    
***Points to remembeer*** - Variables declared with var keyword are function scoped and 
                            can be accessed outside the block in which they are declared.
                         - Variables declared with let and const keywords are block scoped and 
                            cannot be accessed outside the block in which they are declared.

                            - Variables declared with var keyword are hoisted to the top of the function,
                              meaning they can be accessed before they are declare
*/


/* difference between let and const:
             
          Both let and const are used to declare variables in JavaScript, introduced in ES6.
         They are block-scoped and provide better scoping rules compared to var.


            1- let:
                - Used to declare variables that can be reassigned later.
                - Can be declared without initialization.
                - Can be updated but not redeclared in the same scope.
                - Example:
                    let x = 10;
                    x = 20; // Valid
                    let y; // Valid
                    y = 30; // Valid
                    let y = 40; // Invalid (SyntaxError: Identifier 'y' has already been declared)
            
            2- const:
                - Used to declare variables that cannot be reassigned later.
                - Must be declared and initialized at the same time.
                - Cannot be updated or redeclared in the same scope.
                - Example:
                    const x = 10;
                    x = 20; // Invalid (TypeError: Assignment to constant variable.)
                    const y; // Invalid (SyntaxError: Missing initializer in const declaration)
                    const y = 30; // Valid (but cannot be reassigned later)




*/


// let   a =1
// const b=2
// var   c=3//here all three variable are delclared outside the function so they are in the global scope
//   and can be accessed from anywhere in the code.

// console.log(a);//1
// console.log(b);//2
// console.log(c);//3


//now we declared same variable inside the function with same name. 

if (true){
    let a = 10
    const b = 20
    var c = 30 //here all three variable are delclared inside the function so they are in the local scope
    // and can be accessed from anywhere in the code.
    // console.log(a);//10
    // console.log(b);//20
    // console.log(c);//30 
}

// console.log(a);//(ReferenceError: a is not defined) // this will give an error because a is not defined outside the block scope
// console.log(b);// (ReferenceError: b is not defined) // this will give an error because b is not defined outside the block scope
// console.log(c); // (30) this will give 30 because c is declared with var keyword and it is function scoped so it can be accessed outside the block scope.
  

function one(){
    const username = "divyanshu"
     
     function two(){
        const website = "youtube.com"
        // console.log(username);  
        // console.log(website);// this will print the value of website because it is declared in the inner function and can be accessed in the inner function.
     two()// this will print the value of username because it is declared in the outer function and can be accessed in the inner function.
    //  console.log(website); // this will give an error because website is not defined outside the block scope.
}
}
one()// this will call the function one and it will print the value of username because it is declared in the outer function and can be accessed in the inner function.
// console.log(username); // this will give an error because username is not defined outside the block scope.

if (true){
    const user="div "
    if( user === "div "){
        const website = "youtube.com"
        // console.log( user + website );
    }
}

/*----------------------------whhat is hoisting-------------------------------

- Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed.
 This allows you to use variables and functions before they are declared in the code.
- However, only the declarations are hoisted, not the initializations.
- This means that if you try to access a variable before it is declared, it will be undefined,
 and if you try to call a function before it is declared, it will work as expected.
- Hoisting applies to both variables and functions, but the behavior is different for each.
- For variables declared with var, the declaration is hoisted, but the initialization is not.
- For variables declared with let and const, the declaration is hoisted,
 but they are in a "temporal dead zone" until they are initialized.
- For functions, the entire function declaration is hoisted, 
so you can call the function before it is declared.
- For function expressions, only the variable declaration is hoisted, not the function itself.
- Hoisting can lead to confusion and unexpected behavior, so it's important to understand how it works.
- To avoid hoisting issues, 
it's a good practice to declare variables and functions at the top of their scope.


*/


// this is function declaration
// function declaration is hoisted to the top of the scope,
//  meaning you can call the function before it is declared in the code.
// this will print the value of add functio because its declaration 
// console.log("its before the function declaration " + add(2) );
function add(num){
    return num+1
}

add(2)
// console.log("addone " + add(1));// this will print the value of add function because it is declared before the calling of the function.


//this is function expression.
// function expression is not hoisted to the top of the scope,
// meaning you cannot call the function before it is declared in the code.
// this will give an error because addtwo is not defined before it is called.
// console.log("its before the function expression " + addtwo(2) );// this will give an error because addtwo is not defined before it is called.
const addtwo = function(num){
    return num+1
}

addtwo(2)
// console.log("addtwo " + addtwo(2));// this will print the value of addtwo function because it is declared before the calling of the function.