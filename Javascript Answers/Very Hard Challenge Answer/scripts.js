/*
VERY HARD: Create a simple calculator that prompts the user for a number, 
an operator (either +, -, * or /) and another number, and then uses the 
functions created in the hard challenge to output the value in sentence form. 
Example output: "3 + 4 = 7"
*/

// Variables are assigned based on user prompt (parseFloat converts string to number)
var firstNumber = parseFloat(prompt('Please select a number'));
var secondNumber = parseFloat(prompt('Please select a second number'));
var operator = prompt('Please select an operator (+, -, X, /)');

// If statement determines which function to run based on the users selected operator
  if(operator === '+')
  {
// Logging calculation result. Using Concatenation to read full statement
    add(firstNumber, secondNumber);
  } else if (operator === '-'){
    subtract(firstNumber, secondNumber);
  } else if(operator === '/') {
    divide(firstNumber, secondNumber);
  } else if(operator === 'X'){
    multiply(firstNumber, secondNumber); 
  } else {
    console.log('please refresh and follow the instructions')
  }

  // Addition Function
function add(firstNumber, secondNumber){
  console.log(firstNumber + ' plus ' + secondNumber + ' equals ' + (firstNumber + secondNumber));
  return firstNumber + secondNumber;
}

// Subtraction Function
function subtract(firstNumber, secondNumber){
  console.log(firstNumber + ' minus ' + secondNumber + ' equals ' + (firstNumber - secondNumber)); 
  return firstNumber - secondNumber;
}

// Multiplication Function
function multiply(firstNumber, secondNumber){
  console.log(firstNumber + ' times ' + secondNumber + ' equals ' + (firstNumber * secondNumber)); 
  return firstNumber * secondNumber;
}

// Division Function
function divide(firstNumber, secondNumber){
  console.log(firstNumber + ' divided by ' + secondNumber + ' equals ' + (firstNumber / secondNumber)); 
  return firstNumber / secondNumber;
}