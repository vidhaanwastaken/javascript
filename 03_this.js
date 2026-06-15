const myfunc = {

    name: "vidhaan",// is "name" was declared inside the function then "this" would return undifned
    age: 18,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to the website`);//this refers to the current value
        
    }
}

myfunc.welcomeMessage()

myfunc.name = "bob"

myfunc.welcomeMessage()

console.log(this);//this is an empty object in global enviornment only in separate IDE but not in browsers



const one =  () => { //arrow function
        console.log(`${this.name}, welcome to the website`);
        
    }


    const add = (num1,num2) => {
        return num1 + num2
    }
console.log(add(1,3));
