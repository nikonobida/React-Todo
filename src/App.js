import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
      this.state = {
        todos: [],
      };
  };
  completedTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }
  addTodo = todoInput => {
    const newTodo = {
      name: todoInput,
      id: new Date(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  clearCompleted = () => {
    const clearTodo = this.state.todos.filter(todo =>
      todo.completed === false)
    this.setState({
      todos: clearTodo
      })
  }

  render() {
    return (
      <div className='App'>
        <h2>Things to do...</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} completedTodo={this.completedTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  };
};

export default App;