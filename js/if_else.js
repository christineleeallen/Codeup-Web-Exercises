//exercise one

'use strict';

var average = ((70+80+95)/3);

if (average >= 80){
    console.log("You are awesome");
}
else {
    console.log("You need practice");
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

    //exercise 3

var coin = Math.floor(Math.random() * 2);

    while(coin){
        console.log("Heads! Flip again!");
        var coin = Math.floor(Math.random() * 2);
    }
    console.log("Tails! You won!");



















