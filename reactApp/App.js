import React from 'react';
import ListItem from './Container';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
         header: "Header from props...",
         content: "Content from props...",
         footer: "footer from props..."
		}
	}

	render() {
      return (
         <div>
            <Header headerProp = {this.state.header} />
            <Content contentProp = {this.state.content} />
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
            <ListItem />
            
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

export default App;