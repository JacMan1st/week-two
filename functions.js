// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds.")
// }
// pressGrindBeans();

// const favColour = (colour) => {
//     console.log(`My favorite colour is ${colour}.`)
// }
// favColour('black');


// let coffeeIsGrinding = flase;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log
//     }
// }
///////////////////////

// const cashWithraw = (account, accnum) => {
//     console.log(`You have withdrawn £${account} from account number ${accnum}`)
// }

// cashWithraw(200, 8842488);


// const addUp = (num1, num2) => {
//     return num1 + num2;

// }
// console.log(addUp(23, 42));


// // // activity 1
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial (33));


// // //  // activity 2
// let orderCount = 6;

// const takeOder = (topping, topping2) =>{
//     console.log(`${orderCount}x: Pizza with ${topping} and ${topping2}`)
//     orderCount++;
// }

// takeOder("pepperoni", "meatballs")


// // // activity 3

let pin = "4949";
let balance = 1000000;
let attempts = 3;
let acountLock = false;

const pinChecker = (enterPin) => {
    return enterPin === pin;
};
// this funtion checks the pin
const withdraw = (amount) => {
    if (acountLock === false) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrawal successful. Remain balance: £${balance}.`);
        } else {
            console.lof("Unsuccessful transaction. Please try again.");
            }
    } else {
        console.log("Account locked");
    }
};

// function for depositing 
const deposit = (amount) => {
    if (acountLock === false) {
        if (amount => 0) {
            console.log(`Deppsit sussess. New balance £${balance}.`);
        } else {
            console.log("Unsuccessful transaction.");
        } 
    }else {
        console.log("Account locked");
        }
    };

// function for checking the balance
const checkBalance = () => {
    if (acountLock === false) {
        console.log(`Balance: £${balance}`);
    } else {
        console.log("Account locked");
    }
};

// // uses the res t parameter so i can use the attempts funtion 
const attemptTrans = (enterPin, transactionFunction, ...args) => {
    if (pinChecker(enterPin)) {
        transactionFunction(...args);
    } else {
        attempts --;
        console.log(`Incorrect pin. ${attempts} attempts left.`);
        if (attempts === 0) {
            console.log("Account Locked. Snooze you lose.")
            acountLock = true;
        }
    }
};

attemptTrans("4949", withdraw, 3000);
attemptTrans("2345", withdraw, 300)