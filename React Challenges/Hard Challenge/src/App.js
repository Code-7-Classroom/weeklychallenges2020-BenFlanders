import React, { Component } from 'react';
import './App.css';
import BasicInfo from './Person/Person';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {name: "Benjamin Flanders",
        phone: "704-222-4234",
        dob: "January 25th, 1996",
        email: "benjamin.flanders96@gmail.com"},
        {name: "Kassandra Flanders",
        phone: "704-555-4234",
        dob: "October 4th, 1996",
        email: "kassandra.flanders@gmail.com"},
        {name: "Kevin Hoff",
        phone: "704-222-5555",
        dob: "January 9th, 1998",
        email: "kevin.hoff@gmail.com"},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.persons.map(person => {
          return (
            <BasicInfo name={person.name} phone={person.phone} dob={person.dob} email={person.email}/>
          )
        })}  
      </div>
    );
  }
}

export default App;
