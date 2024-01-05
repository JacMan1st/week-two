
// // ACTIVITY 1 // /

// let favSongs = [
//     "Enter the sandman",
//     "Anything with Ozzy",
//     "Down with the Sickness",
// ];

// console.log(favSongs);

// favSongs.push("Comfortably Numb");
// favSongs.push("Nothing else Matters");
// favSongs.pop();
// favSongs.splice(3, 2, "new");

// console.log(favSongs);

// // ACTIVITY 2 // //

// // Using map() to double each number in the array
// const nums = [1, 2, 3, 4, 5];

// const doubledNums = nums.map(function (number) {
//   return number * 2;
// });

// console.log("Original array:", nums);
// console.log("Doubled array:", doubledNums);

// // another example to give the number of characyers in the names in the array
let names = [
    "JacMan",
    "Rich",
    "Mitch",
    "Tom"
]

let nameCount = names.map(function (name) {
    return name.length;
})
console.log(`Original: ${names}`)
console.log(`The number of characters in each: ${nameCount}`)


// // ACTIVITY 3 // //

// let myDrinks = [
//     "beer",
//     "scotch",
//     "brandy",
//     "wine",
//     "milk",
//     "water"
// ];

// for (let i = 0; i < myDrinks.length; i++) {
//     console.log(myDrinks[i])
// }



// let multiTwo = [];

// for (let i = 0; i < 21; i++) {
    
//     if (i % 2 == 0) {
//         multiTwo.push(i);
//     }
// }
// console.log(`Divisable by 2: ${multiTwo}`)


// let counter = 1;

// while (counter < 11) {
//     console.log(counter);
//     counter++
// }

// let age = 15;

// while (age < 18) {
    
//     console.log("Not an adult");
//     age++;
// }

// console.log("you're an adult");



// let cards = ["Diamond", "Spade", "Heart", "Club"]; 
// let currentCard = "Club";

// while(currentCard != "Spade") {

// console.log(currentCard);
// currentCard = cards [Math.floor(Math.random()*4)];

// }
// console.log(currentCard);


