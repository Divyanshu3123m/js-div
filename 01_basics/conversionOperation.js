let score = "69"

console.log(typeof score);
console.log(typeof (score));  //we can write both way with paranthesis or without parantesis

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
//here we change the string to number 

// let now discussing if we add in number some alphabets and then checking what will typeof give output.

let value1 = "69ff"

let value2 = Number(value1)
console.log(typeof value2); //here's the output - number. now let see the value 
console.log(value2); // output - NaN (not a number)

//now we let the value3 to undefined 

let value3 = undefined

let value4 = Number(value3)
console.log(typeof value4); // output - number
console.log(value4);   //output - NaN

// now we let the value5 to null

let value5 = null
let value6 = Number(value5)
console.log(typeof value6); //output - number
console.log(value6);        //output - 0

//let giving any boolean value

let value7= true

let value8 = Number(value7)
console.log(typeof value7); // output - boolean
console.log(value8);    // output - true