//array of 5 number and 10% off on all items and save them again in array after updation
let prices=[250,645,300,900,50];
let i=0;
for(let val of prices){
   let offer=val/10;
prices[i]=prices[i]-offer
   console.log(`PRICE AFTER 10% OFF=${prices[i]}`);
   index++
}

