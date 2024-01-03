
// // activity 1

// let age = 34;
// let country = "UK"

// if (age > 17 && country === "UK" ) {
//     console.log("Yes I can serve you.")
// } else if (country != "UK") {
//     console.log("Where do you think you are?")
// } else {
//     console.log("Sorry, you're not old enough.")
// }

// // activity 2

// let topping1 = "Pepperoni"
// let topping2 = "Meatballs"
// let topping3 = "Anchovies"

// switch (topping1) {
//     case topping1:
//         console.log("This is an imporant topping for me.");
//         break;
//     case topping2:
//         console.log(`I don/'t mind having ${topping2} on my pizza.`);
//         break;
//     default:
//         console.log(`${topping3} should not be on a pizza.`)
//         break;
// }

// // activity 3

// let password = "pineapple";

// if (password.length < 8 ) {
//     console.log("Password too short")
// } else {
//     console.log(password)
// }

// let num = 1;

// if (num % 3 === 0 || num % 5 === 0) {
//     console.log("this number is divisable by 3 or 5")
// } else {
//     console.log("Something else")
// }

// //activity 4

// let num = 0;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizz buzz")
// } else if (num % 5 === 0){
//     console.log("buzz")
// } else if (num % 3 === 0) {
//     console.log("fiiz")
// } else {
//     console.lof("pop")
// }

// // activity 5

// //this way coverts number to string
// let num = 1221; 
// let numString = String(num);
// let isPalindrome = numString === numString.split('').reverse().join('');

//     if (isPalindrome) {
//         console.log(num + " is a palindrome.");
//     } else {
//         console.log(num + " is not a palindrome.");
//     }


// // // with further research i came up with this function that checks 
// // // half then checks the mirror side and compares both
// // // but in honesty im not sure im at this level yet.
//     function checkPalindrome(palindrome) {
//         for (var i = 0; i < palindrome.length / 2; i++) {
//             if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
//                 console.log('The word is not a palindrome!');
//                 return;
//             }
//         }
//         console.log('The word is a palindrome.');
//     }
    
//     checkPalindrome('poop');
    

// // // activity 6

// let time = 17.31;
// let placeOfWork = "Codenation"
// let townOfHome = "Hattersley"

// if (time >= 9.00 && time <= 17.30) {
//     console.log(`I'm working and learning with ${placeOfWork}.`)
// } else if (time >= 1.00 && time <= 8.03) {
//     console.log("I'm in bed, shhh")
// } else if (time > 17.30 && time <= 24.00 || time > 0 && time < 9.00) {
//     console.log(`Just chilling in ${townOfHome}`)
// } else {
//     console.log("Lost in space and time!")
// }
// // // theres are cheeky hour where im lost in space and time.


// // activity 7

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let newStr = str.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// let lastVowel = -1;

// for (let i = 0; i < newStr.length; i++) {
//     let position = newStr[i];
//         if (vowels.includes(position)) {
//             lastVowel = i;
//         }
// }
// console.log(lastVowel)

// // another way 
// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let maxIndex = -1;
//     for (let vowel of vowels) {
//         let lastIndex = str.lastIndexOf(vowel);
//         maxIndex = Math.max(maxIndex, lastIndex);
// }

// console.log(maxIndex);


// // activity 8

// let word = "cosmic";

// if (word[0] === word[word.length - 1]) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// // activity 9

let num1 = 27596;
let num2 = 52489;

let sum = num1 + num2;

if (sum % 2 === 0) {
    console.log(sum)
} else {
    console.log(num1 * num2)
}