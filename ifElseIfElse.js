/**
 * Created by home on 1/11/17.
 */


var isEven = function(number) {
    if (isNaN (number)) {
        return "The input was not a number!";
    } else if (number % 2 === 0) {
        return true;
    } else if (isNaN (number) === true) {
        return "Your input isn't a number!";
    }else {
        return false;
    }
};