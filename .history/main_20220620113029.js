var numbers = [1, 4, 6, 4, 5]
var squareNumbers = numbers.map(function(x){
    return x * x
})

console.log(squareNumbers);
var rectangles = [{width: 10, height: 5}, {width: 10, height: 20}, {width: 14, height: 16}]
var Square = rectangles.map(function(x){
    return x.width * x.height 
})
console.log(Square);

var evenNumber = numbers.filter(function(x){
    return x % 2 == 0
})
console.log(evenNumber);

var newNumber = number.sort(function(x,y){
    
})
 