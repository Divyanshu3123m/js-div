/*----------------------- Arrow Functions -----------------------
     
  - Arrow functions are a more concise syntax for writing function expressions.
    - They are anonymous and change the way this binds in functions.
    - They are always expressions, not declarations.
    - They cannot be used as constructors.
    - They do not have their own this context.
    - They cannot be used with the arguments object.
    - They cannot be used with the new keyword.
    - They cannot be used with the yield keyword.
    - They cannot be used with the super keyword.
    - They cannot be used with the rest parameter.
    - They cannot be used with the spread operator.
    - They cannot be used with the default parameter.
    - They cannot be used with the async keyword.
    - They cannot be used with the await keyword.
    - They cannot be used with the generator keyword.
    - They cannot be used with the class keyword.
    - They cannot be used with the module keyword.
    - They cannot be used with the import keyword.
    - They cannot be used with the export keyword.
    - They cannot be used with the require keyword.
    - They cannot be used with the import.meta keyword.
    - They cannot be used with the import() function.
    - They cannot be used with the import() function with a dynamic import.
    - They cannot be used with the import() function with a static import.
    */

//basically -------this-------- refers to the object that is executing the current function
// if the function is a method of an object, this refers to the object itself
// if the function is a standalone function, this refers to the global object (window in browsers, global in Node.js)
// if the function is called with call(), apply(), or bind(), this refers to the object passed as the first argument to those methods


const user = {
    userName:"divyanshu",
    age:34,
    email:"dm@gmail.com",


welcomeMessage : function() {
    console.log(`Welcome ${this.userName} and age is ${this.age}`);
    // console.log(this);//bsically this is the object itself and it 
}
}
// user.welcomeMessage()// calling the function
// user.userName="Sam"// changing the value of userName
// user.welcomeMessage()// calling the function again


// console.log(this);// ({})  this is the global object in non strict mode and undefined in strict mode

// function chai(){
//     console.log(this);
// }
// chai()

function chai() {
    let username="divyanshu"

  console.log(this.username);
}
// chai();// undefined
// chai() is a standalone function, so this refers to the global object (window in browsers, global in Node.js)
// console.log(chai());

const chai2 =  () =>{
    let username = "ram"
    // console.log(this.username);
}

chai2()// undefined
// chai2() is an arrow function, so this refers to the global object (window in browsers, global in Node.js)
// console.log(chai2());// undefined


// there are some techniques to 

const addTwo = (num1, num2) => {
    return num1 + num2; // this is explicit return

}//if we using curly braces in arrow function then we have to use 
  // return statement otherwise it will not return anything
// console.log(addTwo(2,3));// 5

// another technique to write arrow function is to use implicit return
const addTwo2 = (num1, num2) => (num1 + num2); // if we are using parenthesis then we don't have to use return statement`
// console.log(addTwo2(2,3));// 5

const anything = () => ({username : "shyam", age:32})// if you want to return an object from an arrow function, then you have to wrap the object in parentheses, otherwise it will be treated as a block of code and not an object.

console.log(anything());//({ username: 'shyam', age: 32 })