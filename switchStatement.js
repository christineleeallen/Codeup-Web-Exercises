/**
 * Created by home on 1/11/17.
 */

"use strict"

var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
    case 'sandwich':
        console.log("Sure thing! One sandwich, coming up.");
        break;
    case 'soup':
        console.log("Got it! Tomato's my favorite.");
        break;
    case 'salad':
        console.log("Sounds good! How about a caesar salad?");
        break;
    case 'pie':
        console.log("Pie's not a meal!");
        break;
    default:
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

//example

var color = prompt("What's your favorite primary color?","Type your favorite primary color here");

switch(color) {
    case 'red':
        console.log("Red's a good color!");
        break;
    case 'blue':
        console.log("That's my favorite color, too!");
        break;
    case 'yellow':
        console.log("Lemon color is pretty");

    default:
        console.log("I don't think that's a primary color!");
}

//example

var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
    case 'licorice':
        console.log("Gross!");
        break;
    case 'gum':
        console.log("I like gum!");
        break;
    case 'beets':
        console.log("...is that even a candy?");
        break;
    default:
        console.log("I don't even like candy!");
}

//example

var answer = prompt("Do you love me?", "Write your answer here");

switch(answer) {
    case 'yes':
        console.log("I love you too!");
        break;
    case 'maybe':
        console.log("I'm not sure either");
        break;
    case 'no':
        console.log("I hate you");
        break;
    default:
        console.log("Let's be friends");
}



//troll game

var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
    case 'FIGHT':
        var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
        var smart = prompt("Are you smart?").toUpperCase();
        if(strong === 'YES' || smart === 'YES') {
            console.log("You only need one of the two! You beat the troll--nice work!");
        } else {
            console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
        }
        break;
    case 'PAY':
        var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
        var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
        if(money === 'YES' && dollars === 'YES') {
            console.log("Great! You pay the troll and continue on your merry way.");
        } else {
            console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
        }
        break;
    case 'RUN':
        var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
        var headStart = prompt("Did you get a head start?").toUpperCase();
        if(fast === 'YES' || headStart === 'YES') {
            console.log("You got away--barely! You live to stroll through the forest another day.");
        } else {
            console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
        }
        break;
    default:
        console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

