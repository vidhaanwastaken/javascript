//reduce

//basically adds all the items in an array



 const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,currVal){
// console.log(`acc: ${acc}, curr: ${currVal}`);

//     return acc+currVal
// },0)
// console.log(mytotal);


//now using arrow function


// const mytotal = mynums.reduce((acc,currVal) => acc+currVal,0)

// console.log(mytotal);

const course = [
    {
        courseName : "python",
        price : 299
    },
    {
        courseName : "java",
        price : 2990
    },
    {
        courseName : "cpp",
        price : 499
    },
]

const totalPrice = course.reduce((acc, item)=> acc + item.price,0)
console.log(totalPrice);
