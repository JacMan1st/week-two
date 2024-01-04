// // day 1

// // activity 1

// const myname = "JacMan";
// let myAge = 34;
// const favDrink = "beer";
// const favColour = "black";
// const favColour2 = "red";

// console.log(`My name is ${myname}, I'm ${myAge}. I like ${favDrink} and my favorite colour is ${favColour}.`)

// let line = `My name is ${myname}, I'm ${myAge}, my favoite drink is ${favDrink} and my favorite colours are ${favColour} and ${favColour2}.`

// console.log(line)


// // // activity 2

// let breky = "crumpet";
// let breky2 = "porridge";
// let dinDins = "pizza";
// let dinDins2 = "avocado";
// let tea = "kiev and chips";
// let tea2 = "curry";
// let day = "Today";
// let day2 = "Tomrrow";

// const today = `${day}, it will be ${breky} for my breakfast, ${dinDins} for my dinner and ${tea} for my tea`;

// console.log(`${today}`);

// const tmoz = `${day2}, it will be ${breky2} for my breakfast, ${dinDins2} for my dinner and ${tea2} for my tea`;

// console.log(`${tmoz}`);


// // activity 3

// const bDay = new Date(2024, 4, 2); 
// const today = new Date();
// const millSecDiff = bDay.getTime() - today.getTime();
// const daysLeft = Math.ceil(millSecDiff / (1000 * 3600 * 24));

// console.log(`It's ${daysLeft} days until I'm 17 again.`);

// // activity 4

// let space1 = "X";
// let space2 = "X"; 
// let space3 = "O";
// let space4 = "O";
// let space5 = "X";
// let space6 = "O";
// let space7 = "X";
// let space8 = "O";
// let space9 = "X";

// console.log("   |   |   ")
// console.log(` ${space1} | ${space3} |   `)
// console.log("   |   |   ")
// console.log("--------------")
// console.log("   |   |   ")
// console.log(` ${space5} | ${space7} |   `)
// console.log("   |   |   ")
// console.log("--------------")
// console.log("   |   |   ")
// console.log(` ${space8} |   |   `)
// console.log("   |   |   ")

//////////////////////

// // a forced way
const grid = [
    [' X ', ' O ', '   '],
    [' X ', ' X ', '   '],
    [' O ', '   ', '   ']
];


function printGrid() {
    for (const row of grid) {
    console.log(row.join('|'));
        if(row !== grid[grid.length - 1])
        console.log('--------------');
    }
}

printGrid();


// // // two compact way to do it

// let a = "   |   |   ";
// let b = "-----------";
// console.log(`${a}\n${b}\n${a}\n${b}\n${a}`);

// let a = "     |     |     \n"; 
// let b = "-----------------\n"; 
// console.log(a+a+a+b+a+a+a+b+a+a+a);


















// const finishedCode = true;

// if (finishedCode) {
//         console.log("go to bed!");
//     } else {
//             console.log("Keep coding");
//         }
