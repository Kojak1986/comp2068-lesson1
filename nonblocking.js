//link to the file system library
var fs = require('fs');

//load food asynchronously
var food = fs.readFile('food.txt', 'utf8', function (err, food) {
    console.log(food + '\n');
    console.log('DRINKS:');

});

console.log('FOOD:');

//load drinks asynchronously
var drinks = fs.readFile('drinks.txt', 'utf8', function (err, drinks) {
    console.log(drinks);
if (err){
    console.log(err);

}
else{
    console.log(drinks);
}
});

