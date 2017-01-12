'use strict';

//#2


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    // This is how you get a random number between 1 and 5


    // will take in a starting number of cones and simulate customers coming and buying cones
    // it's okay to console.log here

    if (cones > allCones) {
        console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    } else {
        allCones -= cones;
        console.log("I sold " + cones + " cones.");
    }
}

while (allCones > 0);
console.log("All cones are sold");


//alternative #2
//function sellCones(coneTotal) {
// todo: while all of the cones have not been sold
// generate a random number to sell
// ...
//}


//#3

'use strict';


var number = 2;


while (number <= 65536) {

    console.log("number *= 2");
}

