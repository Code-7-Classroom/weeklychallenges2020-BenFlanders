// VERY HARD CHALLENGE

function firstChar(string) {
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
}
var message = 'what a wonderful day it has been';
console.log(firstChar(message));