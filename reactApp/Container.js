import React from 'react';
import TodoList from './TodoList';

class ListItem extends React.Component{
	constructor(){
		super();

		this.state = {
			items: []
		}
		this.handleAddItem  = this.handleAddItem.bind(this);
		this.changePosition = this.changePosition.bind(this);
	}
	
	handleAddItem(){
		var todo_val = this.refs.todo_val.value;
		this.state.items.push(todo_val);
		this.setState({items: this.state.items});
		//console.log(this.state.items); 
	
	} 
	changePosition(e){
    	var new_item = this.state.item.slice();
    	console.log(new_item);
    }
	render() {
		return (
			<div>
				 <input type="text" ref='todo_val' />
     			 <button onClick={this.handleAddItem}>Add</button>
     			 <ul>
					{
						this.state.items.map(function(item, key){
							return ( 
								<li key={key}>{key} - {item} {key}
								<a onClick={this.handleAddItem}>Click me</a> 
								</li>
								
							)
						})
					}	
     			 </ul>
     			<TodoList /> 	
     			 
			</div>
		);
	}
}
export default ListItem;