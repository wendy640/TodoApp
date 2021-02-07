import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'go to school'},
      {id: 2, content: 'feed the dogs'},
      {id: 3, content: 'buy some cheese'},
      {id: 4, content: 'play mario biscuit'}
    ]
  }
  deleteTodo = (id) => {
    const todos=this.state.todos.filter(todo=>{
      return todo.id !==id
    });
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} />
      </div>
    );
  }
}

export default App;