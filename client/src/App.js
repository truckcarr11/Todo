import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  getTodos = () => {
    axios.get('/api/todos').then(response => {
      this.setState({
        todos: response.data
      });
    });
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <React.Fragment>
        <div className='appContainer'>
          <Header as='h1' className='appHeader'>
            Todo
          </Header>
          <Todos todos={this.state.todos} updateTodos={this.getTodos} />
          <AddTodo updateTodos={this.getTodos} />
        </div>
      </React.Fragment>
    );
  }
}
