/*
MEDIUM: Write a program to tell if someone is shouting (typing in all caps), 
whispering (typing in all lowercase), or neither. Use prompt to get user input, 
and then console log whether the user was shouting, whispering, or talking normally.
*/

var userInput = prompt('Please enter a word or phrase:');

if (userInput === userInput.toUpperCase()){
    console.log(userInput);
    console.log('the user is shouting');
} else if (userInput === userInput.toLowerCase()){
    console.log(userInput);
    console.log('the user is whispering');
} else {
    console.log(userInput);
    console.log('the user is speaking normally');
}


