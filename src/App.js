import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: ' Tomar Agua ', completed: true },
  { text: ' Tomar el Curso de React.js ', completed: false },
  { text: ' Hacer Ejercicio' , completed: false },
  { text: ' Montar en bicicleta ', completed: false },
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos); //estado inicial
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(   //filtra el array para saber que tarea esta completada y cual no 
    todo => !!todo.completed // arrow function que tengan true en el todo o tarea o meta 
  ).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan todos de ' + searchValue);
  
  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
