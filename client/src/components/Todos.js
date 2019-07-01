import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { List } from 'semantic-ui-react';

export default class Todos extends Component {
  render() {
    return (
      <List celled className='todoList'>
        {this.props.todos.map(todo => {
          return <TodoItem key={todo.id} id={todo.id} completed={todo.completed} task={todo.task} updateTodos={this.props.updateTodos} />;
        })}
      </List>
    );
  }
}
