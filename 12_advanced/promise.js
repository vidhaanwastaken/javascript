// const promiseone = new Promise(function(resolve,reject)
// {

//     //call database
//     //cryptography
//     //network call

//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve()
        
//     },1000)

// })

// promiseone.then(function(){

//     console.log("promise consumed");


    
        
//     })


// new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("async task2");
//             resolve()
            
//         },1000)
//     }).then(function(){
//         console.log("async 2 resolve");
    
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username: "chargeDistance", email: "vidhaantripathi@gmail.com"})
//     },1000)
// }) 
// promisethree.then(function(user){
//     console.log(user);
    

// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: "vidhaan", password: "123"})
//         }
//         else{
//             console.log("something went wrong");
            
//         }
//     }, 1000);
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
   
// })
// .then((username)=>{
// console.log(username);

// })
// .catch(function(error){
//     console.log(error);
    
// })
// .finally(()=>{console.log("promise is either resolved or rejected");
// })

// const promiseFive = new Promise(function(resolve,reject){
// setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "javascript", password: "123"})
//         }
//         else{
//             console.log("js went wrong");
            
//         }
//     }, 1000);

// })


// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);
//     }
// catch(error){
//     console.log(error);
    
// }
    
// }
// consumePromiseFive()



// promisefour is the .then .catch way to do it


// promise five is an older more manual way which can be helpfule somtimes
// isme we have to make proper try catch blocks

// await keyword tab use karte hai jab async me hume kisi cheeze ke liye code ko wait karana hai because its taking time to complete
// agar nai karenge toh uske aage badhke baaki ka code run kardega because thats how async works

// promise is pinnacle of asynchronus function isme 
// .then aur .catch use karke hum isme se callback lete hai
// we can chain .then and .catch
// async basically promise ko likhne ka ek way hai jisme we can make it work in a synchronus way when we want it to
// using the await keyword the code will wait for that thing to finish and only  then move on




// better way of accesing data from web rather than using XHML ,using fetch
// fetch ek promise bhi bana deta hai apne andar hi
// fetch ka promise sirf tabhi reject karta hai jab network error hai kuch(webpage permission issue or something)
// normal HTTP errors pe fetch wala promise reject nai karta hai(IMPORTANT FOR INTERVIEW)
// fetch ke liye ek special priority queue banti hai outside of global scope THRU web api
// ye zada higher priority hoti hai than other functions like settimer vagera isliye nomatter kis order me likha hai(priority queue)
// fetch usually  pehle output dedeta hai



// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//  return response.json()
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })


