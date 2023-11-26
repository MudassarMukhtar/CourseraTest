//For-in used for Objects/arrays
let student ={
    name:"mudassar",
    age: 20,
    cgpa: 2.5,
    pass: true,
}
for(let key in student){
    console.log("key=",key,"values=",student[key])
}