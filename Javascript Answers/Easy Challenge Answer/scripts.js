/* 
EASY: Create two variables and assign a person’s name to each. Console log a statement 
that says which name is shorter or longer, and by how many characters. 
Example output: “The name Thomas is longer than John by 2 characters”
*/


//Variables
var name1 = 'David';
var name2 = 'Jonathan';

//Console log
if (name1.length > name2.length){
    console.log(name1 + '\'s name is longer than ' + name2 + '\'s name by ' + 
        (name1.length - name2.length) + ' letters.')
} else {
    console.log(name2 + '\'s name is longer than ' + name1 + '\'s name by ' +  
        (name2.length - name1.length) + ' letters.')
}

