import React from 'react'
import { Todo } from '../model';

interface Props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div>
       {todos.map((i)=>(
        <li>{i.todo}</li>
       ))}
    </div>
  )
}

export default TodoList