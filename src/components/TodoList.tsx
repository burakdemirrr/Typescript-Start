import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div>
       {todos.map((todo)=>(
        <li> <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/></li>
       ))}
    </div>
  )
}

export default TodoList