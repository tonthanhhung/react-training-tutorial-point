import React from 'react';

class SearchLayout extends React.Component{
	render(){
		return (
			<div className="search">
			<header className="search-header"></header>
			<div className="results">
			  {this.props.children}
			</div>
			<div className="search-footer pagination"></div>
		  </div>
		);
	}	
}

export default SearchLayout;