//foreach hume kuch return karke nai deta hai to we can only print the things from foreach
//filter me thru hum values ko extract kaarke usko variable me dalke further operations kar sakte hai

const myNums = [1,2,3,4,5,6,7,8,9,10]


// let newnums = myNums.filter((num)=> num > 4)
// console.log(newnums);


//diff tareeke se arrow function likhenge to alag alag cheeze reutrn hongi
//agar {} lagake likha hai toh scope define hogaya hai
// toh humne return keyword use karna padega jab scope define hogaya

let newnums = myNums.filter((num)=> {
    
    return num>4
})
console.log(newnums);


