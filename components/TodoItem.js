// TodoItem.js

import React from 'react';

var TodoItem = React.createClass({

  handleCompleted() {
    this.props.completeTodo(this.props.todo.id);
  },

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  },

  renderTextStyles() {
    return {
      color: this.props.todo.completed ? 'lightgrey' : 'black'
    }
  },

  render() {
    return (
      <li>
        <div style={this.renderTextStyles()}>
          {this.props.todo.text}
        </div>
        <button onClick={this.handleCompleted}>toggle completed</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    )
  }

});

module.exports = TodoItem;
