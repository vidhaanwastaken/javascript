//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetingd = "hello world"

for (const greet of greetingd) {
    console.log(greet);
    
    
}

//maps

const map = new Map()

    map.set('IN', "india ")
    map.set('USA', "united states pf america ")
    map.set('FR', "france ")
      map.set('IN', "india ")

console.log(map);


for (const [key, value] of map) {
    console.log(key, ":", value);
    
    
}
