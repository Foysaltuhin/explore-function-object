// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i > 8) {
//         break;
//     }

// }

var numbers = [34, 45, 90, 13, 101, 08, 54, 39];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 12) {
        break;
    }
}