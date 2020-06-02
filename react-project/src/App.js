import React from 'react';
import TodoList from './TodoList/TodoList';
import TodoItem from './TodoItem/TodoItem';
import './App.css';

class App extends React.Component {

  render() {
    return(
    <div>
      <TodoList></TodoList>
      <TodoItem></TodoItem>
    </div>
    );
      
    }
}

export default App;
