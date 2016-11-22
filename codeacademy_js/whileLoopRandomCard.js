/**
 * Created by home on 11/16/16.
 */


var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
    console.log(currentCard);

    var randomNumber = Math.floor(Math.random() * 4);

    currentCard = cards[randomNumber];
}

console.log('Found a Spade!');