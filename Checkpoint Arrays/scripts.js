var drinksArray = [];

drinksArray.push('water', 'coffee', 'tea'); 
console.log(drinksArray);

var foodsArray = [];

foodsArray[0] = 'apple';
foodsArray[1] = 'sandwich';
foodsArray[2] = 'chips';

console.log(foodsArray);

var mealsArray = drinksArray.concat(foodsArray);

console.log(mealsArray);

mealsArray.reverse();

console.log(mealsArray);
