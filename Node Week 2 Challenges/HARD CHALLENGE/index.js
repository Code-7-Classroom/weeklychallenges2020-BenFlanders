// HARD CHALLENGE SOLUTION

/*********ENDPOINTS*******
app.get ('/')
app.get ('/api/employees')
app.post ('/api/emplyees')
app.put ('/api/employees/:id')
app.delete ('/api/employees/:id')
*/

// initializing variables to node modules / json files we are pulling in
let Joi = require('joi');
let express = require('express');
let data = require('./public/employees.json');
let app = express();

app.use(express.json());

// When the home page is loaded, "Hello World!" response is set
app.get('/', function(req, res){
    res.send('Hello World!');
});

// When the "/api/employees" endpoint is targeted, the json file with employee info is displayed
app.get('/api/employees', function(req, res){
    if(!data) return res.status(404).send(`Couldn't find the students.`);
    res.send(data);  
});

app.post('/api/employees', (req, res) => {
    
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);
        
     let employee = {
        id: data.employees.length + 1,
        name: req.body.name, 
        salary: req.body.salary,
        department: req.body.department
    };
    data.employees.push(employee);
    res.send(employee);
});

app.put('/api/employees/:id', (req, res) => {
    const employeeID = data.employees.find(c => c.id === parseInt(req.params.id));
    if (!employeeID) return res.status(404).send('No Employee found with this ID.');
    

    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    employeeID.name = req.body.name; 
    employeeID.salary = req.body.salary;
    employeeID.department = req.body.department
    res.send(employeeID);
  
});

// Input Validation
function validateCourse(employee) {
    const schema = {
        name: Joi.string().min(3).required(),
        salary: Joi.string().required(),
        department: Joi.string().required()
    };

    return Joi.validate(employee, schema);
}

// Delete Method
app.delete('/api/employees/:id', (req, res) => {
    const employeeID = data.employees.find(c => c.id === parseInt(req.params.id));
    if (!employeeID) return res.status(404).send('No Employee found with this ID.');
    

    const index = data.employees.indexOf(employeeID);
    data.employees.splice(index, 1);

    res.send(employeeID);
});

// The user can target one specific employee by targeting their "id" as the endpoint.
app.get('/api/employees/:id', function (req, res){    
    const employeeID = data.employees.find(c => c.id === parseInt(req.params.id));
    if (!employeeID) return res.status(404).send('No Employee found with this ID.');
    
    res.send(employeeID);   
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});