/**
 * Created by home on 11/11/16.
 */


//if else followed underneath by a switch//

var moonPhase = 'full';

if (moonPhase === 'full') {
    console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
    console.log('Back on two feet');
} else {
    console.log('Invalid moon phase');
}




var moonPhase = 'full';

switch (moonPhase) {
    case 'full':
        console.log('Howwwwlll!!');
        break;
    case 'mostly full':
        console.log('Arms and legs are getting harrier');
        break;
    case 'mostly new':
        console.log('Back on two feet');
        break;
    default:
        console.log('Invalid moon phase');
        break;
}