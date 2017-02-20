import React from 'react';
import ItemDetail from './ItemDetail';

class ListItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			items: ['item0', 'item1']
		}
		this.handleAddItem  = this.handleAddItem.bind(this);
	}
	handleAddItem(){
		var todo_val = this.refs.todo_val.value;
		this.state.items.push(todo_val);
		this.setState({items: this.state.items});

		console.log(this.state.items);
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
                            <ItemDetail key={key} id={key} itemProp={item} />                        
                        )
                    })
		     	 }
		        </ul>
			</div>
		);
	}
}
export default ListItem;