console.log("2">1); // javascript automatically convert string to number and then compare it.
console.log(1>"3"); //(false) javascript automatically convert string to number and then compare it.




console.log(null>0);//false because null is not a number.
console.log(null==0);//false because null is not a number.
console.log(null>=0);//true because null 

/* null > 0:

null is converted to 0 for the comparison.
The comparison 0 > 0 is false.
null == 0:

null is only loosely equal to undefined and not to any other value.
Therefore, null == 0 is false.
null >= 0:

null is converted to 0 for the comparison.
The comparison 0 >= 0 is true */


console.log(undefined>0);//false because undefined is not a number.
console.log(undefined==0);//false because undefined is not a number.
console.log(undefined<0);//false because undefined is not a number.


console.log(undefined==null); //true because both are loosely equal to each other.

console.log("2"===2); //false because === is strict equal to operator and it check the type of the variable also.

/*
Yes, you are correct. In JavaScript, the == operator performs type coercion,
 meaning it converts the operands to the same type before making the comparison.
  On the other hand, the === operator, also known as the strict equality operator,
   checks both the value and the type without performing any type conversion.

Here's a summary:


== (loose equality):
Converts the operands to the same type before making the comparison.
Example: 1 == "1" is true because the string "1" is converted to the number 1.


=== (strict equality):
Checks both the value and the type without converting the operands.
Example: 1 === "1" is false because the types are different (number vs. string).


So, == allows type conversion, while === requires both the value and the type to be the same. */