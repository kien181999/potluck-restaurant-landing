var numbers = [1, 2, 3, 4, 5]
var squareNumbers = numbers.map(function(x){
    return x * x
})

console.log(squareNumbers);
var rectangles = [{width: 10, height: 5}, {width: 10, height: 20}, {width: 14, height: 16}]
var Square = rectangles.map(function(x){
    return x.width * x.height 
})
console.log(Square);

var ne