// Dates
let mydate = new Date()
console.log(mydate);// (2025-03-28T10:52:09.923Z) like this, basically its not clearly understandable.
console.log(mydate.toString()); //(Fri Mar 28 2025 16:24:05 GMT+0530 (India Standard Time)) now its can easily understandable.
console.log(mydate.toDateString()); //(Fri Mar 28 2025) now it's more precise but not including the time.
console.log(mydate.toISOString()); //(2025-03-28T10:57:47.929Z) it's following yyyy-mm--dd 
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());//(28/3/2025, 4:29:39 pm) its the basic one we prefer to read or write this kinda.
console.log(mydate.toTimeString());//(16:30:45 GMT+0530 (India Standard Time)) its only provide the time.
console.log(mydate.getTime());
console.log(typeof mydate);//object

let myCreatedDate = new Date(2023,2,22)//here the indexing start from 0-jan, 1-fab, 2-march like this

console.log(myCreatedDate.toDateString());

let anotherdate = new Date("2024-03-28")
console.log(anotherdate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);