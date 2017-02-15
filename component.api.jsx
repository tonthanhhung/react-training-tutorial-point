import React from 'react';

class ComponentAPI extends React.Component {
    constructor() {
        super();

        this.state = {
            employee : []
        };

        this.addEmployee = this.addEmployee.bind(this);
    };

    addEmployee() {
        var name = "Vu";
        var employeeData = this.state.employee;
        employeeData.push(name);
        this.setState({employee: employeeData})
    }

    render() {
        return (
            <div>
            <button onClick={this.addEmployee}>Add Employee</button>
            <p>Employee: {this.state.employee}</p>
            </div>
        )
    }
}

export default ComponentAPI;