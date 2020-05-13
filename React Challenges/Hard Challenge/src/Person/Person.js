import React, { Component } from 'react';

class BasicInfo extends Component{

    render(){
        return (
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.phone}</p>
            <p>{this.props.dob}</p>
            <p>{this.props.email}</p>
        </div>
        )
    }
}

export default BasicInfo;