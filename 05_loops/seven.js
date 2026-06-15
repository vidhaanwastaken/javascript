const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map( (num) => num+10)


// chaining
// jab sari chains ke thru pass hojayega tab jaake newnums pe dalegi value

const newnums = mynums
.map((nums)=>nums*10)
.map((nums)=>nums+1)
.filter((nums)=>nums>40)


console.log(newnums);
