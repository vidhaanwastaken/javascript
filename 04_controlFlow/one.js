// if(2==2){
//     console.log("hi");
    
// }

// const isUserLoggedIn  = true
// if (isUserLoggedIn){
//     console.log("hello");
    
// }

// if (2 == "2"){
//     console.log("executed");
    
// }
// if (2 === "2"){
//     console.log("executed");// diff between double equal and triple equal
    
// }

// const temprature = 41

// if(temprature<50){
//     console.log("temp is less than 50");
    
// }

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
    
// }

//     console.log(`user power: ${power}`);//cant acess power since its out of scope

// const balance = 1000

// if(balance>500) console.log("test");
// if(balance<500){
//     console.log("less than 500");
// } else if(balance <750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
    
// }

const isUserLoggedIn = true
const debitCard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(loggedinfromemail || loggedinfromgoogle){
    console.log("allowed to shop2");
    
}

if(isUserLoggedIn && debitCard){
    console.log("user is allowed to shop");
    
}
