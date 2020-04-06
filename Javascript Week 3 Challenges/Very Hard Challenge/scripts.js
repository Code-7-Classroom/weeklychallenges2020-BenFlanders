// Very Hard Challenge Solution

var Person = function(name, job, age){
    Programmer.call(this, name, job, age);
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function(){
        console.log('Running is fun! - said no one ever');
    }
    this.fetchJob = function(){
        console.log(this.name + ' is a ' + this.job + '.');
    }
}

var Programmer = function(language, busy){
    this.language = language;
    this.busy = busy;
    this.completeTask = function(){
        this.busy = false;
        if(this.busy == false){
            console.log(this.name + ' is not busy.');
        } else {
            return this.name + ' is busy.';
        }
    }
    this.acceptNewTask = function(){
        this.busy = true;
        console.log(this.name + ' is busy.');
    }
    this.offerNewTask = function(){
        if (this.busy == true){
            console.log(this.name + ' can\'t accept any new tasks right now.');
        } else{
            return this.name + ' can take on a new responsibility.'
        }
    }
    this.learnLanguage = function(){
        this.language = ['C++', 'Java', 'Python'];
        console.log(this.name + ' is learning these languages ' + this.language);
    }
    this.listLanguage = function(){
        this.language = ['HTML', 'Node.js', 'CSS'];
        console.log(this.name + ' knows these coding languages ' + this.language);
    }
}

Person.prototype = Object.create(Programmer.prototype);
Person.prototype.constructor === Programmer; 

var john = new Person('John' , 'Front-end developer' , 24);
var david = new Person('David' , 'Back-end developer' , 21);

john.exercise();
john.fetchJob();
john.completeTask();
john.acceptNewTask();
john.offerNewTask();
john.learnLanguage();
john.listLanguage();

david.exercise();
david.fetchJob();
david.completeTask();
david.acceptNewTask();
david.offerNewTask();
david.learnLanguage(); 
david.listLanguage();
