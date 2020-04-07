// VERY HARD CHALLENGE

function coinChange(coins, amount) {
    var finalResult = FindMinCount(coins, 0, 0, amount, 0, amount + 1);
    function FindMinCount(coins, i, currentSum, amount, count, result) {
        if(amount == 0){
            return 0;
        }

        if(currentSum > amount){
            return result;
        }

        if(currentSum == amount){
            result = Math.min(count, result);
            return result;
        }

        if(i<=coins.length-1){
            count++;
            result = FindMinCount(coins, i, currentSum+coins[i], amount, count, result);

            count--;
            result = FindMinCount(coins, i+1, currentSum, amount, count, result);
        }
        return result;
    };

    if(finalResult == amount){
        return -1; 
    } else {
        return finalResult;
    };
}

console.log(coinChange([1,5,10,25], 110));