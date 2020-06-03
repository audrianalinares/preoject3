import React from 'react';
import TodoList from './TodoList/TodoList';
import TodoItem from './TodoItem/TodoItem';
import AddTodo from './AddTodo/addTodo';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: []
    };
  }
  render() {
    return(
    <div>
      <AddTodo>addTodoFn={this.addTodo}></AddTodo>
      <TodoList todos={this.state.todos}></TodoList>
    </div>
    );
      
    }
    componentDidMount = () => {
      const todo =localStorage.getItem('todos');
      if(todos) {
        const savedTodos = JSON.parse(todos);
        this.setState({todos: savedTodos });
      } else{
        console.log('No todos');
      }
      }
}

    addTodo = async (todo) => {
      await this.setState({ todos: [...this.state.todos,todo]});
      localStorage.setItem('todos',JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todo'));
    }
      export default App;
