/*eslint-env browser*/

var milesDrivin = window.prompt("How many miles have you driven? ");
var gallons = window.prompt("How many gallons does your car hold" );
var mpg = milesDrivin / gallons;
document.write(parseInt(mpg, 10));