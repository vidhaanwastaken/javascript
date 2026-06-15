//better way to concatenate
let name = "vidhaan"
let age = 18

console.log(`hello my name is ${name} and im ${age} years old`);

const gamename = new String("vidhaan-was-taken")
console.log(gamename);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename);          // original value still not changed because its a primitive data type 
                                // hence data is passed by reference
console.log(gamename.charAt(3));
console.log(gamename.indexOf('a'));

const newname = gamename.substring(3,8) // 8 is not included but 3 is
console.log(newname);                   // ignores -ve value

const newname2 = gamename.slice(-8)//if value is +ve uske us position ke aage se print hona shuru hoga
console.log(newname2);             // if it is -ve then us value ke peeche ka part ulta print hoga

const newname3 = "    vidhaan    "
console.log(newname3);
console.log(newname3.trim());// removes starting and ending spaces 


const url = "https://vidhaan.com/vidhaan tripathi"//we want to remove the unwatned space in the middle

console.log(url.replace(' ','-'));

console.log(url.includes("vidhaan"));

console.log(gamename.split("-"));//splits string into diff strings using given separator











