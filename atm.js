
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pin = "4949";
let balance = 1000000;
let attempts = 3;
let acountLock = false;

// this funtion checks the pin
const pinChecker = (enterPin) => enterPin === pin;

// // function for withdrawal
const withdraw = (amount) => {
    if (acountLock === false) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrawal successful. Remaining balance: £${balance}.`);
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
        if (amount > 0) {
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

// // // input functions and atempts
const attemptTrans = async () => {
    let enterPin = await askQuestion("Enter PIN: ");

    if (pinChecker(enterPin)) {
        let option = await askQuestion(
            "Please Select:\n1. Withdraw\n2. Deposit.\n3. Balance\n"
        );
            
        switch (option) {
            case "1": 
                let withdrawAmount = parseFloat(await askQuestion("Enter your amount: "));
                withdraw(withdrawAmount);
                break;
            case "2":
                let depositAmount = parseFloat(await askQuestion("Enter your amount: "));
                deposit(depositAmount);
                break;
            case "3": 
                checkBalance();
            break;
            default:
                console.log("Transation failed.");
        }
    } else {
            attempts --;
        console.log(`Incorrect pin. ${attempts} attempts left.`);
        if (attempts === 0) {
            console.log("Account Locked. Snooze you lose.")
            acountLock = true;
        }
    }
    rl.close();
};


const askQuestion = (question) => {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
};
attemptTrans();

// can use in terminal but some issues such as. attempts doesnt work, deposit doesnt pass the set balance. 