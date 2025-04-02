const score = 100
console.log(score);

const balance = new Number(200)
console.log(balance);

const othernumber =3223.9
console.log(balance.toFixed(3));
console.log(othernumber.toPrecision(7));
console.log(balance.toString());
console.log(typeof balance);
console.log(typeof score);

const anotherNumber = 10000000000
console.log(anotherNumber);
console.log(anotherNumber.toLocaleString('en-IN'));
console.log(typeof anotherNumber);
const stringNumber = anotherNumber.toString()
console.log(stringNumber);
console.log(stringNumber.toLocaleString('en-IN'));
console.log(stringNumber.length);


/* 
Primitive vs Object Types:

Use primitive types (const balance = 200) instead of object wrappers (new Number(200) for better performance and simplicity.

Number Formatting:
Use toFixed() to control decimal places.
Use toPrecision() to control significant digits.
Use toLocaleString() for locale-specific formatting (e.g., 'en-IN' for Indian formatting).

Type Checking:
Use typeof to check the type of variables (typeof balance, typeof score).

String Conversion:
Use toString() or String() to convert numbers to strings.

Avoid Misuse of Methods:
Do not call toLocaleString() on strings; it is meant for numbers and dates.

Memory Efficiency:
Avoid unnecessary object creation (e.g., new Number()).

Debugging:
Use console.log() to verify outputs and debug your code.
By keeping these points in mind, you can write clean and efficient code!

*/

//------------------* Maths *------------------//
console.log(Math);
//absolute value:
console.log(Math.abs(-7.6));//basically it is the absolute value of a number, which means it removes the negative sign and always returns a non-negative value.
//ceil value:
console.log(Math.ceil(7.2));//If the number has a decimal part, it always rounds up to the next integer, It doesn't matter how small or large the decimal part is.
//floor value:
console.log(Math.floor(70.8));//If the number has a decimal part, it always rounds down to the previous integer(before decimal), It doesn't matter how small or large the decimal part is.
//round value: 
console.log(Math.round(56.5));//If the decimal part is 0.5 or greater, it rounds up to the next integer. If the decimal part is less than 0.5, it rounds down to the previous integer.
//truncate value: removing the fractional part of a number
console.log(Math.trunc(11.8));//It removes the decimal part of the number and returns only the integer part, regardless of whether the number is positive or negative.
console.log(Math.trunc(-11.8));
//square root:
console.log(Math.sqrt(144));//It returns the square root of a number. If the number is negative, it returns NaN (Not a Number).
console.log(Math.sqrt(-144));//It returns NaN because the square root of a negative number is not a real number.

//random number:
console.log(Math.random());//It generates a random number between 0 (including) and 1 (excluding). The number can be a decimal or an integer, but it will always be less than 1.
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) +min;
}
console.log(getRandomInt(1,1000));//It generates a random integer between the specified minimum and maximum values (inclusive). The Math.floor() function is used to round down the result to the nearest integer.





//power of any number:
console.log(Math.pow(2, 3));//It returns the result of raising the first argument to the power of the second argument. In this case, it returns 2 raised to the power of 3, which is 8.
