import React from 'react'
import { Todo } from '../model';
import { FaEdit } from "react-icons/fa";
import { FaDeploydog } from "react-icons/fa";
import "./styles.css"
import { FaDotCircle } from "react-icons/fa";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

  const handleDone = (id: number) => {
    setTodos(todos.map((todo)=> todo.id === id ? { ...todo, isDone: !todo.isDone }:todo))};

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo)=>todo.id !== id));
  }


return (
  <form className='todos__single'>
    {
      todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      )
      :
      (
        <span className="todos__single--text">{todo.todo}</span>
      )
    }

    <div className="icons">
      <span className="icon"><FaEdit /></span>
      <span onClick={()=>handleDelete(todo.id)}><FaDeploydog /></span>
      <span onClick={() => handleDone(todo.id)}><FaDotCircle /></span>
    </div>

  </form>
)
}

export default SingleTodo