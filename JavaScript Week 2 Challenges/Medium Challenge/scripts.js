/*
MEDIUM: Create a program that accepts a number (1-12) as input 
and logs to the console that number and its corresponding month. 
For example: if the user enters the number 3, then it should return 
the month “March.” Alert the user if they enter an invalid number 
(e.g. less than 1 or greater than 12).
*/


// Call pickMonth Function
pickMonth();

function pickMonth(){

var userNum = parseFloat(prompt('Please enter a number from 1 to 12')); 
var month;
    // switch case determines what month is assigned to based on user input
    switch (userNum) {
        case (1):
            month = 'January';
            break;
        case (2):
            month = 'February';
            break;
        case (3):
            month = 'March';
            break;
        case (4):
            month = 'April';
            break;
        case (5):
            month = 'May';
            break;
        case (6):
            month = 'June';
            break;
        case (7):
            month = 'July';
            break;
        case (8):
            month = 'August';
            break;
        case (9):
            month = 'September';
            break;
        case (10):
            month = 'October';
            break;
        case (11):
            month = 'November';
            break;
        case (12):
            month = 'December';
            break;
        default: 
            alert("ERROR: You entered an invalid number. Please select a number from 1 - 12.");  
            pickMonth();     
    }

    console.log(month);
}


