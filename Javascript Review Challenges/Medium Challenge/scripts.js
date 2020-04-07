// MEDIUM CHALLENGE SOLUTION

var numArray = [1, 5, 3, 7, 10, 6, 8];

function findPosition(arr, target){

    for (var i = 0; i < arr.length; i++){
        console.log(numArray.indexOf(target));
        return numArray.indexOf(target);
    }

}

findPosition(numArray, 7);