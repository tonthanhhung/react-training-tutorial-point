import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		 data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
				
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],	
         header: "Header from props...",
         content: "Content from props...",
         footer: "footer from props...",
		 
		}
	}
	render() {
	  var myStyle = {
         border: '1px solid #000'
      }
      return (
         <div>
            <Header headerProp = {this.state.header} />
            <Content contentProp = {this.state.content} />
			<table style={myStyle}>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
            <Footer footerProp={this.state.footer} />
         </div>
      );
   }
	
} 

class Header extends React.Component{
	render(){
		return (
			<div>
				<h1>{this.props.headerProp}</h1>
			</div>
		);
	}	
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.footerProp}</h2>
         </div>
      );
   }
}

class TableRow extends React.Component {
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