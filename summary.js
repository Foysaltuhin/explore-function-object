// variable declear korlam
var skyColor = 'white';

// Array declear korlam

var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
phones[3] = 'walton';
// check oppo element exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('Opps! amir khan ippo is missing');
}
// id lg is available
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available now');
}

//loop
var num = 0;
while (num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; i++) {

}

function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}

addThreeNumbers(87, 42, 56);

// object

var microphone = {
    brand: 'blue',
    price: 120,
    color: black
}

