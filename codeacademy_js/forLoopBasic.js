/**
 * Created by home on 11/16/16.
 */



var vacationSpots = ['Spain', 'Greece', 'Norway',];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//[0] this is called Property Access
//Instead of typing out each console line (example above), use a for loop (example below)

for(var i = 0; i < vacationSpots.length; i++){
    console.log(vacationSpots[i]);
}


//add text to the for loop

var vacationSpots = ['Spain', 'Greece', 'Norway',];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//[0] this is called Property Access
//Instead of typing out each console line (exmaple above), use a for loop (example below)

for(var i = 0; i < vacationSpots.length; i++){
    console.log('I would love to visit '+ vacationSpots[i] + '.');
}
