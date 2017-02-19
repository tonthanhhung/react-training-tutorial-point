import React from 'react';

var TodoList = React.createClass({
  changePosition: function(e){
    // Change position of list item (e.g. to top/certain position/end of list)
    // Create a copy of this.props.data and reorder it, then call
    // this.props.onReorder to signal to the parent component that
    // the data has been reordered
    this.props.onReorder(reorderedData);
  },

  render:function() {

    var todoNodes = this.props.data.map(function(todo) {
      return (
        <Todo key={todo.id} id={todo.id}>
          {todo.todoText}
        </Todo>
      );
    });
    return (
      <form className="todoList">
        {todoNodes}
        <a onClick={this.changePosition}>Click me</a>
      </form>
    )
  }
});

var Todo = React.createClass({
  render:function(){
    return (
      <div className="todoItem">
        <input type="text" ref="todoItem"/>
      </div>
    )
  }
});

export default TodoList;