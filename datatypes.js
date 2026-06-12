//primitive(pass by value)

// number, string, boolean, null, undefined, symbol, BigInt

//non primitive(pass by reference)

// array, object, functions

const car = ["suv","sedan","hatchback"] //array

let myobj = {

    name: "vidhaan",
    age: 19,
} 
//object

const myfunc = function(){
    console.log("hello world");
    
}
//function



//--------------------------------------------------------------------------------

//memory

//stack -> primitive data types
// heap -> non primitive
// stack me hamesha copy milega but heap me direct original info access hogi
let abc = [1,2,3,4]
console.log(abc[5]);


const min = 1
const max = 100

// console.log(Math.floor(Math.random()*(max - min + 1)*m



