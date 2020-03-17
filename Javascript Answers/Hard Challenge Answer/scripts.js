/* 
HARD: Create 4 math functions, one called add() that adds 2 numbers, 
one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, 
and one called divide() to divide two numbers.
*/

// Addition Function
function add(num1, num2){
    console.log(num1 + ' plus ' + num2 + ' equals ' + (num1 + num2));
    return num1 + num2;
}

// Subtraction Function
function subtract(num1, num2){
    console.log(num1 + ' minus ' + num2 + ' equals ' + (num1 - num2)); 
    return num1 - num2;
}

// Multiplication Function
function multiply(num1, num2){
    console.log(num1 + ' times ' + num2 + ' equals ' + (num1 * num2)); 
    return num1 * num2;
}

// Division Function
function divide(num1, num2){
    console.log(num1 + ' divided by ' + num2 + ' equals ' + (num1 / num2)); 
    return num1 / num2;
}

// Calling Functions
add(5, 10);
subtract(25, 7);
multiply(5, 10);
divide(50, 10);
