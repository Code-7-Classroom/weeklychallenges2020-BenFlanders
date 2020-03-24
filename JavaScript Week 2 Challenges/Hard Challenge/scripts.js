/* 
HARD: Given the information below for Tom and Jerry. 
Tom - 	height:  9in   	mass: 8 lbs
Jerry - 	height: 10cm 	mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
    BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
Create a Boolean variable containing information about whether Tom has a higher BMI 
than Jerry. Print a string to the console with the variable from step 3 
( e.g. Is Tom’s BMI higher than Jerry’s? false).
*/

//Initialize subject data
var tomMass = 8;
var tomHeight = 9;
var jerryMass = 0.1;
var jerryHeight = 3.93;
//Calculate BMI and comparison variable
var tomBMI = calcBMI(tomMass, tomHeight);
var jerryBMI = calcBMI(jerryMass, jerryHeight);
var comparison = (tomBMI > jerryBMI);
//BMI calculation function
function calcBMI(mass, height){
    return mass / (height * height);
}
//Console logs
console.log(tomBMI);
console.log(jerryBMI);
console.log( "Is Tom's BMI higher than Jerry's?" + ' ' + comparison);
