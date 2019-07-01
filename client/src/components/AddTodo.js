import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  handleChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  addTodo = () => {
    axios
      .post('/api/todos', {
        task: this.state.newTodo
      })
      .then(() => {
        this.props.updateTodos();
        this.setState({
          newTodo: ''
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className='addTodoContainer'>
          <Input onChange={this.handleChange} value={this.state.newTodo} className='addTodoInput' />
          <Button onClick={this.addTodo} color='green'>
            Add Todo
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
