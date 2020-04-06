// Medium Challenge Solution

var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(slice){
    return function(people){
        return "Each person gets " +(slice/people).toFixed(2);
    };
}

console.log(sharePizza(2));
console.log(sharePizza(3));

 
// var sharePizza = function(people){
//     var slice = 8;
//     return "Each person gets " +(slice/people).toFixed(2);
// };