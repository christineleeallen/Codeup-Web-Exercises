/**
 * Created by home on 11/16/16.
 */


//run the for loop backwards
//If you don't add the '-1' to vacationSpots.length, you will get an 'undefined' in console

var vacationSpots = ['Spain', 'Greece', 'Norway',];

for(var i = vacationSpots.length - 1; i >= 0; i--){
    console.log('I would love to visit '+ vacationSpots[i] + '.');
}