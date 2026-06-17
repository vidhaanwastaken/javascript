class user{

    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is: ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username) 
        this.email = email
        this.password = password
        
    }
    addCourse(){
        console.log(`course was added by ${this.username}`);

        
    }
}

const chai = new teacher("vidhaan","vidhaantripathi@","123")
chai.addCourse()
// extends is basically inheritence ka syntax
//super keyword parent function pe vo value daldeta hai in constructor
//super has to be used before assigning any other values in constructor
