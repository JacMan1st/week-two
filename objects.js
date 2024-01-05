// const person = {
//     name: "JacMan",
//     age: 34
// }

// console.log(person.name);
// console.log(person["age"]);

// let offer = "none";
// let time = "1200";

// const cafe = {
//     name: "Caphay",
//     seatCap: 100,
//     specialOffer: true,
//     drinks: [
//         "coffee",
//         "tea",
//         "beer",
//         "scotch",
//         "brandy"
//     ],
//     breakfastOffer: "Free suggar with coffee",
//     dinnerOffer: "Free ice with scotch",
//     noOffer: "Sorry no offer",

//     openCafe(){
//         if (this.specialOffer) {
//         return "Come on in.";
//         }
//     },
//     closeCafe(){
//         return "Sorry we're closed";
//     }
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
// } else if (time => 1200) {
//     offer = cafe.dinnerOffer;
// }

// console.log(cafe.openCafe())
// console.log(offer);
// console.log(cafe.drinks[4]);
// console.log(cafe.drinks[1])
// console.log(cafe.breakfastOffer)



// const alarms = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// };

// const theDay = {
//     day: "Sunday",
//     getAlarm() {
//         if (this.day === "Saturday" || this.day === "Sunday") {
//             return alarms.weekendAlarm;
//         } else {
    //             return alarms.weekdayAlarm;
    //         }
    //     }
    // };
    
    // const alarm = theDay.getAlarm();
    // console.log(`For ${theDay.day}, alarm = ${alarm}`);
    


    // // //  ACTIVITY 1 // // //

// const person = {
//     name: "JacMan",
//     age: 34,
//     favSongs: [
//         "Enter the sandman",
//     "Anything with Ozzy",
//     "Down with the Sickness",
//     "Comfortably Numb",
//     "Nothing else matters",
//     "I'm a Barbie Girl"
//     ],
//     sayHi(){
//         return `Hello, my name is ${this.name}`;
//     }
// }

// console.log(person.sayHi())


// // // ACTIVITY 2 // // //

// let pet = {
//     name: "Afred",
//     typeOfPet: "Dog",
//     age: 13,
//     colour: "Grey",
//     eat(){
//         return `${this.name} is eating.`;
//     },
//     drink(){
//         return `${this.name} is drinking`;
//     }
// }

// console.log(pet.eat())


// // // ACTIVITY 3 // // //

let coffeeShop = {  // // object with properties for branch, drinks, and food
    branch: "Tree",
    drinks: {
        black: 2,
        white: 2.5,
        capacino: 4
    },
    food: {
        Baconbutty: 2.5,
        sosigButty: 3,
        crisp: 0.5,
        egg: 0.75
    },
    // method for drink orders
    drinkOrder(order){
        let totalCost = 0;
        let compltOrder = "Drinks:\n";
        // loops through drinks in order
        for(const drinks in order) {
            //checks if its in order and object
            if (order.hasOwnProperty(drinks) && this.drinks.hasOwnProperty(drinks)) {
                const quantity = order[drinks];
                const cost = this.drinks[drinks] * quantity;
                compltOrder += `${quantity} ${drinks}(s) - £${cost.toFixed(2)}\n`;
                totalCost += cost;
            }
            //return complete order and total
        } return `Your order is: \n${compltOrder}\nTotal cost: £${totalCost.toFixed(2)}\n`;
        },
        //method for food orders and same as above
        foodOrder(order){
            let totalCost = 0;
            let compltOrder = "Food:\n";
            for(const food in order) {
                if (order.hasOwnProperty(food) && this.food.hasOwnProperty(food)) {
                    const quantity = order[food];
                    const cost = this.food[food] * quantity;
                    compltOrder += `${quantity} ${food}(s) - £${cost.toFixed(2)}\n`;
                    totalCost += cost;
                }
            } return `Your order is: \n${compltOrder}\nTotal cost: £${totalCost.toFixed(2)}\n\n`
        }
    };

// const drinkOrder = { black: 2, white: 1 };
// console.log(coffeeShop.drinkOrder(drinkOrder));

// const foodOrder = { sosigButty: 1, crisp: 2 };
console.log(coffeeShop.foodOrder({sosigButty: 2, crisp: 3}) 
            + coffeeShop.drinkOrder({black: 2, white: 1, capacino: 1}));
