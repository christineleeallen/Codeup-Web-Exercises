//exercise one

'use strict';

var average = ((70+80+95)/3);

if (average >= 80){
    console.log("You are awesome");
}
else {
    console.log("You ne/ed practice");
}

//exercise one alternative solution

var grade1 = 10;
var grade2 = 80;
var grade3 = 95;

var sum = grade1 + grade2 + grade3;

var average = sum / numberOfGrades;

if (average >= 80) {
    console.log("Good Work!");

} else {
    console.log("you need to practice more");
}




//exercise 2


var cam = 180;
var discount = 10;
if (cam >=200) {
    var camfinal = cam - discount;
    console.log("Cameron you earned a discount of \$" + discount + " and your total is \$" + camfinal);
} else {
    console.log("Cameron your total is \$" + cam);
}

var ryan = 200;
var discount = 10;
if (ryan >= 200) {
    var ryanfinal = ryan - discount;
    console.log("Ryan you earned a discount of \" + discount +  and your total is \$" + ryanfinal);
} else {
    console.log("Ryan your total is \$" + ryan);
}

var george = 320;
var discount = 10;
if (george >= 200) {
    var georgefinal = george - discount;
    console.log("George you earned a discount of \$" + discount + " and your total is \$" + georgefinal);
} else {
    console.log("George your total is \$" + george);
}


//exercise 2 different solution

var cam = 180;
var ryan = 250;
var george = 320;

var discount = .2;

var total = cameron; //switch out names to see discounts

if (total > 200) {
    total - (total * discount);
}

console.log("The total is"+ total);




//exercise 3

var coin = Math.floor(Math.random() * 2);

    while(coin){
        console.log("Heads! Flip again!");
        var coin = Math.floor(Math.random() * 2);
    }
    console.log("Tails! You won!");



// exercise 3 different solution

var flipACoin = Math.floor(Math.random() * 2);

if (flipACoin == 0){
    console.log(flipACoin);
    console.log("buy car");
} else {
    console.log(flipACoin);
    console.log("buy house");
}

//add "if" to else if is ok, expecting outcome

























