

'use strict';


//#1

var average = ((70 + 80 + 95)/3);
if (average >=80) {
    console.log('You are awesome!');
} else {
    console.log('Keep trying!');
}

//#1 alternative solution

var grade1 = 70;
var grade2 = 80;
var grade3 = 95;

var sum = grade1 + grade2 + grade3;

var average = sum / numberOfGrades;

if (average >= 80) {
    console.log("Good Work!");

} else {
    console.log("you need to practice more");
}


//#2

var Cameron = (180);
var Ryan = (250);
var George = (320);

var discount = (.2);

var total = George; //keep switching names to see discounts

if (total > 200) {
    total = (total * discount);
}
    console.log('The total is '+ total);


//#2 alternative solution

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






//#3

var flipACoin = Math.floor(Math.random()* 2);


if (flipACoin === 0) {
    console.log(flipACoin);
    console.log('Buy a car');
} else {
    console.log(flipACoin);
    console.log('Buy a house');
}
//add "if" to else if is ok, expecting outcome






