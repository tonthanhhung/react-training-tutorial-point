import React from 'react';
import ItemDetail from './ItemDetail';

class ListItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			items: ['item0', 'item1']
		}
		this.handleAddItem  = this.handleAddItem.bind(this);
		this.moveItem  		= this.moveItem.bind(this);
		
	}
	handleAddItem(){
		var todo_val = this.refs.todo_val.value;
		this.state.items.push(todo_val);
		this.setState({items: this.state.items});

		console.log(this.state.items);
	} 
	moveItem(a, b){
		var listitems = this.state.items.slice();	
		
		var tmp  = listitems[a];
		listitems[a] = listitems[b];
		listitems[b] = tmp;
		this.setState({items: listitems});
	}
	moveup(key) {
    	if(key>0){
            var b = key--;
            this.moveItem(key,b);  
        }
  	}
	movedown(key) {
	    if(key < this.state.items.length -1){
	    	var b = key++;
	    	this.moveItem(key, b);	
	    }
	}
	render() {
		
		return (
			<div>
				<input type="text" ref='todo_val' />
     			<button onClick={this.handleAddItem}>Add</button> 
     			<ul>
                    {this.state.items.map((item,key) => <ItemDetail key={key} id={key} itemProp={item} moveup={() => this.moveup(key)} movedown={() => this.movedown(key)} />)}	
		        </ul>
			</div>
		);
	}
}
export default ListItem;