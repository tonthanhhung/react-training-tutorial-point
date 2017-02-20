import React from 'react';

class ItemDetail extends React.Component{
  constructor(){
    super(); 
    this.state = {
      data: []
    }
  }
  
  render(){
    return (
      <li key={this.props.id}>
          {this.props.itemProp}
          <button onClick={this.moveup.bind(this)}>moveup</button>
          <button onClick={this.movedown.bind(this)}>movedown</button>
      </li>
    );
  }
  moveup() {
    console.log('moveup');
  }
  movedown() {
    //var current_item_id = this.props[Object.keys(this.props)[0]];
    console.log(this.props);
    
  }
}

export default ItemDetail;