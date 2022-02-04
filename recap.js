// 1.variable
var favoriteBook = '4 hour work week';

// 2.array
var bookList = ['positioning', 'hooked', 'shoe dog', 'start with why'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('small Giant');
bookList.pop();

// 3.conditionals

if (bookList[1] == 'hooked') {
    console.log('I am Hooked');
}
else {
    console.log('I am not hooked');
}
// 4.loop
// while loop

var i = 0; // loop variable
while (i < 15) {
    console.log('looping ;ooping looping');
    i++;
}

// for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}