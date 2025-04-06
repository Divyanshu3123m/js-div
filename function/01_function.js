/*function:
           -A function is a block of code that performs a specific task.
           -It can take inputs (parameters) and return a value.
           -Functions are reusable and can be called multiple times in a program.
           -Functions can be declared in various ways in javascript.
           -There are four ways to declare a function in javascript:
            1- Function Declaration:
            2- Function Expression:
            3- Arrow Function:
            4- Anonymous Function:
           -Functions can be passed as arguments to other functions, returned from functions, and assigned to variables.
              -Functions can also be nested, meaning a function can contain another function inside it.
              -Functions can be called immediately after they are defined (IIFE - Immediately Invoked Function Expression).
              -

*/


function add(a,b){
    // console.log(a+b, "this is before return statement");
    return a+b     // this will return the sum of a and b.because we are using the return statement.and it will stop the execution of the function after the return statement.
    //  console.log(a+b);// this will not execute because we are using the return statement before this line.
}
// add(33,55)

const sum = add(2,3)
// console.log("this is the value of Sum :", sum); // this is the value of Sum : 5
// always remeber if you using console.log inside the function then it will not return the value of the function. it will just print the value of the function in the console. but if you are using return statement then it will return the value of the function and you can use that value outside the function.
//  and you can also use the console.log inside the function to print the value of the function in the console. but it will not return the value of the function. it will just print the value of the function in the console. but if you are using return statement then it will return the value of the function and you can use that value outside the function.

// function loginuser(username){
//     return `${username} is logged in successfully`
// }
// loginuser("divyanshu") // this will not print because it just return but not any print operation their.
// console.log(loginuser("divyanshu"));// divyanshu is logged in successfully
// console.log(loginuser());// undefined is logged in successfully
// console.log(loginuser("")); //  is logged in successfully

// so we used the if operation to check ths username is empty or not.
function loginuser(username){ // if within (username="raj") then it will return the value of username as raj if we do not give any value in the calling function
    if(!username){ 
        return "please enter a valid username"
    }
    return `${username} is logged in successfully`
}

console.log(loginuser("divyanshu"));// divyanshu is logged in successfully
console.log(loginuser());// please enter a valid username

function calculateCartPrice(...num1){// this is a rest operator. it will take all the values in an array format.
    return num1
}

// console.log(calculateCartPrice(1,2,3,4,5,6,7,8));

function val(val1, val2,...val){
    return val

}
console.log(val(1,2,3,4,5,6,7,8,9));// here 1 and 2 are val1 and val2 and rest of th values are in the array format.

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
// const user={
// username :"divyanshu",
// price:200
// }
// handleobject(user)//its crated object and we can also access object by creted directed object.like
handleobject({
    username:"divyanshu",
    price:300
})
//similary we can pass array 
const myNewArray=[33,44,55,66,77]
function returnSecondValue(getarya){
    return getarya[1]// this will return the second value of the array.
}
console.log(returnSecondValue(myNewArray));// 44
// this is the value of second element in the array.