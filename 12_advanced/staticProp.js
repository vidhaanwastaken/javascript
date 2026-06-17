class user{
        constructor(username){
            this.username = username

        }

        logme(){
            console.log(this.username);
            
        }
         static createId(){ //static keyword is used to BASICALLY private a method so that uski inherited child classes cannot use that function
            return `123`

        }
}
const vidhaan = new user("vidhaan")
console.log(vidhaan.createId());
