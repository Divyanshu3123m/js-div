const tinderUser = new Object();// this is singleton object.because we are using the new keyword to create an object.
const tinderUser1 = {} //  this is literal object,c eated using curly braces {}.

 tinderUser1.id = "234fgf"
 tinderUser1.name= "divyanshu"
 tinderUser1.isLoggedIn = true 

//  console.log(tinderUser1);

 tinderUser.name = "maurya"
// console.log(tinderUser);

// now we are going to create an object under the object 

const address = {
  country: "India",
  state: {
    stateName: "Uttar Pradesh",
    stateName2: "Madhya Pradesh",
    stateName3: "Maharashtra",
    city: {
      city1: "lucknow",
      city2: "kanpur",
      city3: "delhi",
    },
  },
};

// console.log(address.state.stateName);
// console.log(address.state.city.city1);
// console.log(address.state.city.city3);
// console.log(address.city);// this will give undefined because we have not defined the city in the address object.
// console.log(address.state.city);

// now we are going to create multiple objects and then combine them into one object and we'll learn various methods to combine them into one object.

const user1 ={1:"a", 2:"b"}
const user2 ={3:"c", 4:"d"}
const user3 ={5:"e", 6:"f"}

// this is first method to combine the objects by using comma seperator
 const user4 = {user1, user2, user3}
 console.log(user4);// the main drawback of this method is that it will create a new object and the keys will be the object name and the values will be the object itself.

 // this is second method to combine the objects by using Object.assign() method
 const user5 = Object.assign({} , user1, user2, user3) // here we using target and source objects. the curly braces is the target object and the user1, user2, user3 are the source objects. it will combine all the objects into one object.
 console.log(user5);// it will create a new object and the keys will be the object name and the values will be the object itself.       

// this is third method to combine the objects by using spread operator.
const user6 = {...user1, ...user2, ...user3} // here we using spread operator to combine the objects into one object.

console.log(user6);// it will create a new object and the keys will be the object name and the values will be the object itself.

console.log(Object.keys(user6));// it will give the keys of the object in an array format.
console.log(Object.values(user6));// it will give the values of the object in an array format.
console.log(Object.entries(user6));// it will give the keys and values of the object in an array format.

//deconstructoring of object:
//  Deconstructing is a way to extract values from an object or array and assign them to variables.
//  It allows you to unpack values from arrays or properties from objects into distinct variables.
//  It is a convenient way to access and work with data stored in objects or arrays.

const course = {
    coursename:"javascript",
    price:999,
    isPaid:true,
    description:"this is a javascript course"
}

console.log(course.isPaid);
const {description: d} = course // this is a deconstructoring of object.
//  here we are extracting the value of description from course object and assigning it to a variable d.
//  we are using the colon to rename the variable d to description.
//  this is optional. we can also use the same name for the variable.
// console.log(d);


