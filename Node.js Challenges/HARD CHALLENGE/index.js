// HARD CHALLENGE SOLUTION

// initializing variables to node modules / json files we are pulling in
let express = require('express');
let app = express();
let data = require('./public/employees.json');

// When the home page is loaded, "Hello World!" response is set
app.get('/', function(req, res){
    res.send('Hello World!');
});

// When the "/api/employees" endpoint is targeted, the json file with employee info is displayed
app.get('/api/employees', function(req, res){
    if(!data){
        res.status(404).send(`Couldn't find the students.`);
    }
    res.send(data);  
});

// The user can target one specific employee by targeting their "id" as the endpoint.
app.get('/api/employees/:id', function (req, res){    
    const employeeID = data.employees.find(c => c.id === parseInt(req.params.id));
    if (!employeeID) {
        res.status(404).send('No Employee found with this ID.');
    } else{
        res.send(employeeID);
    }
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});