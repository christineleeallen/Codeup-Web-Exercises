/**
 * Created by home on 11/11/16.
 */
//on the "if" statement, change out "||" (either can be true) for "&&" (and, both must be true)
// and then again for "!" (opposite) and again for "!==" (not equal to each other)//


var moonPhase = 'full';
var foggyNight = true;

if (moonPhase === 'full' || foggyNight) {
    console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
    console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
    console.log('Back on two feet');
} else {
    console.log('Invalid moon phase');
}