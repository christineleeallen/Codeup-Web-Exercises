/**
 * Created by home on 11/14/16.
 */
var orderCount = 0;

function takeOrder(topping, crustType) {
    console.log('Order: ' + crustType + ' crust topped with ' + topping);
    orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
    return itemCount * 7.5;
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thick');

console.log(getSubTotal(orderCount));
