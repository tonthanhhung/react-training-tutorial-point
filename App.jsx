import React from 'react';
import PropsValidation from './props.validation.jsx';
import ComponentAPI from './component.api.jsx'

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },

                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },

                {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        }
    }

    render() {
        var condition = true;
        return (
            <div>
                {/* This is just comment */}
                <p data-name="Vu">This is a paragraph</p>
                <p>{condition == true ? "It's true :p" : "It's not true :)"}</p>
                <Header />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <Content key={i} data={person} />)}
                    </tbody>
                </table>
                {/* Test props */}
                <h3>Test props</h3>
                <h4>{this.props.headerProp}</h4>
                <h4>{this.props.contentProp}</h4>
                <p>Props Validation</p>
                <PropsValidation />
                <p>Component API</p>
                <ComponentAPI />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>This is header component</h1>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default App;