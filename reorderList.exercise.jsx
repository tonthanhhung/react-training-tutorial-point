import React from 'react';

class ReorderList extends React.Component {
    constructor () {
        super();

        this.state = {
            items: [],
            itemValue: ''
        }

        this.handleAddFunction = this.handleAddFunction.bind(this);
        this.updateState = this.updateState.bind(this);
        this.moveUpItem = this.moveUpItem.bind(this);
        this.moveDownItem = this.moveDownItem.bind(this);
    }

    handleAddFunction() {
        var items = this.state.items;
        items.push(this.state.itemValue);
        this.setState({items: items});
    }

    updateState (e) {
        this.setState({itemValue: e.target.value});
    }

    moveUpItem(i, event) {
        var currentItem= this.state.items[i];
        var swapItem;
        var items = this.state.items;

        if (i== 0) {
            swapItem = items[items.length - 1];
            items[i] = swapItem;
            items[items.length - 1]= currentItem;
        }
        else {
            swapItem = items[i-1];
            items[i] = swapItem;
            items[i-1]= currentItem;
        }

        this.setState({
            items:items
        })
    }

    moveDownItem(i, event) {
        var currentItem= this.state.items[i];
        var swapItem;
        var items = this.state.items;

        if (i == (items.length - 1)) {
            swapItem = items[0];
            items[items.length - 1] = swapItem;
            items[0]= currentItem;
        }
        else {
            swapItem = items[i+1];
            items[i] = swapItem;
            items[i+1]= currentItem;
        }

        this.setState({
            items:items
        })
    }

    render() {
        return (
            <div>
                <AddList add={this.handleAddFunction} update={this.updateState} />
                {this.state.items.map((item,i) => <ItemList key={i} id={i} data={item} moveup={this.moveUpItem.bind(this, i)} movedown={this.moveDownItem.bind(this, i)} />)}
            </div>
        )
    }
}

class AddList extends React.Component {

    render() {
        return (
            <div>
                <input type='text' onChange={this.props.update} />
                <button onClick={this.props.add} >Add</button>
            </div>
        )
    }
}

class ItemList extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.id} {this.props.data} <button onClick={this.props.moveup}>Up</button><button onClick={this.props.movedown}>Down</button></li>
            </ul>
        )
    }
}

export default ReorderList;