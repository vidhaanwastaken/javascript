function setUsername(username){

    this.username = username
}
function createUser(username,email,password){
    this.email = email
    this.password = password

    setUsername.call(this, username)

}
const chai = new createUser("chai", "chai@chai", 123)
console.log(chai);

//jab encapsulated functions hote hai toh when andar wala function call stack me jaata hai
//vo call stack me alagse hi envionment banake upar aata hai as we have seen in the diagrams
//but jab uska context khatam hota hai toh instead of going into the outer function 
//it goes directly to the global scope, hence outerfunction me defined method and variables kabhi acess nai ho pati
//to prevent this hum .call use karte hai and usko ek KHUDKA "this" dedete hai
