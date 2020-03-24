/* 
EASY: Create an array of students holding their last name, first name, 
and age with 3 students. To validate, please log a greeting with the first 
name, last name and age of the 2nd student. The output should look like 
"Hello, my name is John Doe and I'm 19 years old."
*/ 

// Creating the Array with our data
var studentsArray = ['John', 'Doe' , 14 , 'Mary', 'Elizabeth', 12, 'Alex', 
'Oliver', 15]

// Logging our output statement with concatenation
console.log('Hello, my name is ' + studentsArray[3] + ' ' + 
studentsArray[4] + ' and I\'m ' + studentsArray[5] + ' years old.')

/****************************
 **** SECOND OPTION
 ****************************

// Storing Objects with Student Properties into Array
var john = {
    firstName: 'John',
    lastName: 'Doe',
    age: 14
};

var mary = {
    firstName: 'Mary',
    lastName: 'Elizabeth',
    age: 12
};

var alex = {
    firstName: 'Alex',
    lastName: 'Oliver',
    age: 15
};

var studentArray = [john, mary, alex];

// Logging the properties of the mary Object
console.log(studentArray[1]);
*/