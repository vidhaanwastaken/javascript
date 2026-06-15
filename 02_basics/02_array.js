const marvelhero = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvelhero.push(dc) // marvelhero ka ek elemt poora array hi hoga dc wala
// console.log(marvelhero);

const newarray = marvelhero.concat(dc)
console.log(newarray);

const spreadarray = [...marvelhero,...dc]


const another_array = [1,2,[3,4,5],6,7,[8,9,[10,11]],12]

console.log(another_array.flat(2));// opens all array inside array situation as per the depth given

const name = "vidhaan"

console.log(Array.from(name));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


