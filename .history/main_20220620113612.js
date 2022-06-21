var numbers = [1, 4, 6, 2, 5]
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

var newNumber = numbers.sort(function(x,y){
    return x - y
})
console.log(newNumber);
var orders = [{
    name: 'A', quanity: '4', Price: 100
},
{name: 'B', quanity: '4', Price: 200
},
{name: 'C', quanity: '5', Price: 400
}
]
var sum = 