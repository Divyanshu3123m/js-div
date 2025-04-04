/* In javaScript objects can declare in two ways:
   

   1-Singleton:- Its means that if you make an object via consturctor then it is called as a Singleton.
   Use new Object() only if you need to dynamically create an object or extend the Object prototype.
   Created using the new keyword.
   e.g - const tinderUser = new Object();// this is singleton object.because we are using the new keyword to create an object.
    e.g - Object.create
||

   2- Object Literals:-
   Use object literals when you know the properties and values of the object at the time of creation.
   Created using curly braces {}.
   e.g - const JsUser = {} // heres that curly braces is that object currently its an empty but can put some value inside that to make an object.

   remember:- keys and value are always in string format.
*/

const mysym = Symbol("key1"); // this is a symbol and it is not a string. it is used to make a unique key for an object.

const JsUser = { //  remember, here all the keys are behind the scene treated as a string.
    name: "divyanshu",
    "full name": "divyanshu maurya",// this is a string and it is not a valid key name. so we have to use the square brackets to access the value of this key.
    mysym : "mykeys1", // this is a symbol and it is not a string. it is used to make a unique key for an object.
    age: 23, // number
    location: "lucknow", // string
    email: "div@gamil.com", // string
    isLoggedIn: false, // boolean
    lastLoginDays: ["monday","tuesday"] // array

}

// console.log(JsUser.email);// (div@gmail.com)  its not right way to access the value of object via dot method because it is not a string.
// console.log(JsUser["email"]);//(div@gmail.com) its right way to access the value of object via string.
// console.log(JsUser["full name"]); // (divyanshu maurya) // here we have to use the square brackets to access the value of this key because it is not a valid key name.
// console.log(JsUser["mysym"]);//(mykeys1)
// console.log(typeof mysym);//(symbol) // this is a symbol and it is not a string. it is used to make a unique key for an object.

// change the value of any object simplyy overwrite 
   JsUser.age=12
//    console.log(JsUser);

// Object.freeze(JsUser)// this is used to freeze the object and it will not allow to change the value of the object further.
JsUser.email = "chaiaurcode@gmail.com" // this will not change the value of the object because we have frozen the object.
// console.log(JsUser) 


/* function :-
   - function is a block of code that can be reused.
   - function is a first class citizen in javascript.
   - function is a first class object in javascript.
*/

// function declaration

JsUser.greeting = function(){
   console.log("hello "+ this.name);
   console.log(`the email is ${this.email}`);
}
console.log(JsUser.greeting());// hello divyanshu
console.log(JsUser.greeting);//[Function (anonymous)] // this is a function and it is not a string. it is used to make a unique key for an object.
   





