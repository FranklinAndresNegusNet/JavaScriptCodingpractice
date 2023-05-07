//Puede pasar una variable o un valor booleano a una if cláusula de la siguiente manera:

let isTrue = true;
if (isTrue) {
  // run code if true
}

if (true) {
  // run code if true
}
console.log(isTrue);


//
//let currentMoney = 1000;
//let laptopPrice = 1500;

//if (currentMoney >= laptopPrice) {
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
//} else{
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
//}


let currentMoney= 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}