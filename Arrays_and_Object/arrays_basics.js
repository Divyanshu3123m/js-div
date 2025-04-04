/* Arrays:
   -The array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single cariable name,
   and has members for performing common array operations.

   -JavaScript arrays are resizable and can contain a mix of different data types. (when those characteristics are undesirable, use typed arrays instead.)
   -JacaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, 
    but must be accessed using nonnegative intefers(or their respectice string form as indexes.)
   -JavaScript arrays are zero-indexed the first element of an array is at index 0, the second is at index 1, and so on --
    and the last element is at the calue of the array's length property minus 1.
   -JavaScript array-copy iperations create shallow copies.(All standard built-in copy operations with any JavaScript objects create shallow coopies, rather than deep copies).
   - 


*/

const myarray = [0,1,2,3,4,5]
// console.log(myarray);
const mySuperHeros = ["Iron Man", "Thor", "Captain America", "Hulk"]
// console.log(mySuperHeros[2]);
const arry2 = new Array(1,2,3,4,5)
// console.log(arry2);


/*  Arrays methods


*/

arry2.push(9)// its add 9 at the last of the array.
// console.log(arry2); //[1, 2, 3, 4, 5, 9]
myarray.push(9)// its add 9 at the last of the array.
// console.log(myarray);
myarray.pop()// it remove the data from the last
// console.log(myarray);
mySuperHeros.push("shaktiman")
// console.log(mySuperHeros);

//unshift and shift
mySuperHeros.unshift("SpiderMan")// Adds "SpiderMan" to the beginning basically its just simply add the element in the fist of the position and remaining will shift one position forward but there's a disadvatanges of this method when there's thousand of array elements present their then it will take too much time consuming and also load on the computer processor.
// console.log(mySuperHeros);
const arry = [10,11,12,13,14,15]
arry.shift() // it remove the first element of the array. 
// console.log(arry);

// console.log(arry.includes(10));//false because we've already apply shift() operation on arry so the elemnt 10 isn't present in the arry.
// console.log(arry.includes(14));// true

// console.log(arry.indexOf(11));//(0) basically it tell the given elemnt is present on which index.
// console.log(arry.indexOf(3));//(-1) it means that the element doesn't exist in the array.

const newarry = arry.join() // when we use this then it will change the array(object) to string.

// console.log(arry);
// console.log(typeof arry);//object
// console.log(newarry);
// console.log(typeof newarry);//string

/*------------------------- Slice and splice ---------------------------------*/
//splice manipulate the original array where slice do not manipulate the original array.

const numbers = [1,2,3,4,5,6]
console.log("A ", numbers);//(1,2,3,4,5,6)

const mynm1 = numbers.slice(0,3)// it will not manipulate the original array and it will return the new array.
console.log(mynm1);//(1,2,3)
console.log("B ", numbers);//(1,2,3,4,5,6)// here the original array is not manipulate and it will return the new array.

const mynm2 = numbers.splice(1,3)// In splice the original array get manipulate and remove the element which we used splice method.
console.log("C ", mynm2);//(2,3,4)//it also take the last element 
console.log(numbers);//(1,5,6) here the remaining element left after splice 


 





