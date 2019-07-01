import React, { Component } from 'react';
import axios from 'axios';
import { Button, Icon, Header, ListItem } from 'semantic-ui-react';

export default class TodoItem extends Component {
  handleOnClick = () => {
    axios.put('/api/todos/' + this.props.id + '/toggle').then(() => {
      this.props.updateTodos();
    });
  };

  handleDelete = () => {
    axios.delete('/api/todos/' + this.props.id).then(() => {
      this.props.updateTodos();
    });
  };

  render() {
    return (
      <ListItem onClick={this.handleOnClick} className='todoItem'>
        <Header
          as='h3'
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}
          className='todoItemText'
        >
          {this.props.task}
        </Header>
        <Button icon size='tiny' color='red' onClick={this.handleDelete} className='todoItemButton'>
          <Icon name='trash' />
        </Button>
      </ListItem>
    );
  }
}
