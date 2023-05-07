let cardOne = 7;
let cardTwo = 1;
let sum = cardOne + cardTwo;
// variables para representar los naipes de la banca
let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

// va a agregar código que simula tomar un naipe más. Veamos qué sucede.
let cardThree = 7;
sum += cardThree;
if (sum > 21) {
    console.log('Your Lost');
    process.exit(1);
}
console.log(`You have ${sum} points`);

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
    console.log('You win');
} else {
    console/log('You lost');
}