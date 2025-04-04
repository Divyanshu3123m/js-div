const marvel_heroes = ["Captain america", "Iron man", "Hulk", "Shang Chi"]
const dc_heroes = ["Batman", "SuperMan", "Flash"]

// marvel_heroes.push(dc_heroes)// here only push the heroes 
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes)//it created a new array with combined one.
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes, ...dc_heroes]// its called as a spread operator, it helps in adding two or more arrays and combine them all.
// console.log(allNewHeroes);


const anotherArray = [2,3,4,2,[434,456,65],[66,77,88,[44,55,33]]]
const real_another_array = anotherArray.flat(Infinity)//// returns a new array with all sub-array elements concatenated into it recursively upto to the specified depth.
// console.log(real_another_array);//([
//                                  2,  3,  4,  2, 434, 456,
//                                 65, 66, 77, 88,  44,  55,
//                                 33
//                               ])

// console.log(Array.isArray("divyanshu"));// it simply tells that given things is array or not?
// console.log(Array.from("divyanshu"));// it convert into array 
// console.log(Array.from({name: "hitesh"}));//it will give an empty array beacause you have to tell that which things you want to convert in the array (keys or value) if you specified particulary then it will convert into the array.

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));//([ 100, 200, 300 ])