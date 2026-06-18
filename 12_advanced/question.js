
let chargeTime = 0;
let lateTime = 5;
let chargeDistance = 0
let totalDistance = 5
// let d = Date.now
const startTime = Date.now()
let freeWaitTimeEnd = false
let rideStarted = false
let rideEnded = false;
let currTime
let totalFees = 0
let timeRideStart





console.log("the driver has arrived");
// console.log(startTime);

setTimeout(() => checkTime(startTime), 1000);

function checkTime(startTime){
 currTime = (Date.now()-startTime)/1000

    if(!freeWaitTimeEnd && currTime>=3){
        console.log("free wait time has ended");
    
        
            freeWaitTimeEnd=true
    }
    
     if(!rideStarted && currTime>=5 ){
        
    console.log("the ride has started");
    let lateFees = (Math.floor(currTime-3)*5)
    console.log(`late fees is: ${lateFees}`);
    totalFees = lateFees
    rideStarted = true
    }
     if(!rideEnded && currTime>=12){
        totalFees = Math.floor(currTime-7)*10 + totalFees
    console.log("the ride has ended");
    console.log(`total fees is: ${totalFees}`);
    rideEnded = true
    }
    
    
    else{
       
        setTimeout(() => checkTime(startTime), 1000);
    }
}



// while (currTime-startTime != 3) {
//     console.log("free wait time has ended");
//     let d2 = new Date()
//     let currTime = d2.getSeconds()
//     console.log(currTime);
    
// }




// setTimeout(function () {
//     chargeDistance =  totalDistance*10

//     console.log("you have reached your destination");
//     console.log(`your  distance fees is: ${chargeDistance}`);
//         console.log(`your final fare is: ${chargeTime+chargeDistance}`);

// }, 12000);

// console.log("the driver has reached your location");

// setTimeout(function(){
//     console.log("your free wait time has ended");
    
// },3000)

// const fareCalculation = setTimeout(function () {
   
//         chargeTime = (lateTime - 3) * 5;
//         console.log("ride has started");
//         console.log(`your  late fees is: ${chargeTime}`);
    
    
// }, 5000);

