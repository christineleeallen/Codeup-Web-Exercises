/**
 * Created by home on 11/16/16.
 */


var myPlaces = ['one', 'two', 'three'];
var friendPlaces = ['one', 'four', 'five'];

for(var i = 0; i < myPlaces.length; i++){
    console.log(myPlaces[i]);

    for(var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);

        if (myPlaces[i] === friendPlaces[j]) {
            console.log('Match: ' + myPlaces[i]);
        }
    }
}
