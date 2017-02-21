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
          <button onClick={this.props.moveup}>moveup</button>
          <button onClick={this.props.movedown}>movedown</button>
      </li>
    );
  }
}

export default ItemDetail;