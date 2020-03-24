/* 
VERY EASY: Write a function named min that takes two 
arguments and returns their minimum.
*/ 



// Simple version without User Input
function min(value1, value2){
    console.log(Math.min(value1, value2));
}

min(24, 12);


// Advanced version that takes User Input
var firstNumber = prompt("Please enter a number");
var secondNumber = prompt("Please enter a second number")

function minimum(){
    var result = Math.min(firstNumber, secondNumber);
    console.log(result);
}

minimum();