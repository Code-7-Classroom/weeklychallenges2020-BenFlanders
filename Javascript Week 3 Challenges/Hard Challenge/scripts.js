// Hard Challenge Solution

var john = createPII('John', '123-45-6789');

function createPII(name, ssn){
    return function(){
        return name;
    }
}

console.log(john());





// class PII{
//     name;
//     #ssn;

//     constructor(name, ssn){
//         this.name = name;
//         this.#ssn = ssn;
//     }

//     getName(){
//         return this.name;
//     }
// }

// let bob = new PII('Bob', '123-45-6789');

// console.log(bob);


