let marks=[85,97,44,37,76,60];
//let sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
let sum=0
for(let val of marks)
{
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(`avg numer of class ${avg}`);