// Easy Challenge Solution

var run = exercise('running');
var swim = exercise('swimming');

console.log(run());
console.log(swim());

 function exercise(activity){
     return function(){
         return "Today's Exercise: " + activity;
     };
 }

